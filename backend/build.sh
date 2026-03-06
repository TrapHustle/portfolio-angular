#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt
python manage.py collectstatic --no-input

python manage.py makemigrations

python manage.py migrate

# Teste Cloudinary directement
python manage.py shell << 'EOF'
import cloudinary
import cloudinary.uploader
import os

print("Cloud name:", os.environ.get('CLOUDINARY_CLOUD_NAME'))
print("API Key:", os.environ.get('CLOUDINARY_API_KEY'))

# Test upload
try:
    result = cloudinary.uploader.upload(
        "https://via.placeholder.com/150",
        public_id="test_connection"
    )
    print("✅ Cloudinary fonctionne:", result['secure_url'])
except Exception as e:
    print("❌ Erreur Cloudinary:", str(e))
EOF

# Crée le superuser automatiquement si il n'existe pas
python manage.py shell << 'EOF'
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='triumph').exists():
    User.objects.create_superuser('triumph', 'kotchid6@gmail.com', 'triumph')
    print('Superuser créé')
else:
    print('Superuser existe déjà')
EOF
