

import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    full_name: '',
    email: '',
    phone: '',
    message: ''
  };
  sending = false;
  success = false;
  error = '';

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  sendMessage() {
    if (!this.formData.full_name || !this.formData.email || !this.formData.message) {
      this.error = 'Veuillez remplir tous les champs obligatoires.';
      setTimeout(() => this.cdr.detectChanges(), 0);
      return;
    }

    this.sending = true;
    this.error = '';
    setTimeout(() => this.cdr.detectChanges(), 0);

    this.http.post(`${environment.apiUrl}/api/contact/`, this.formData).subscribe({
      next: () => {
        this.success = true;
        this.sending = false;
        this.formData = { full_name: '', email: '', phone: '', message: '' };
        setTimeout(() => this.cdr.detectChanges(), 0);
      },
      error: (err) => {
        this.error = 'Erreur lors de l\'envoi. Réessayez.';
        this.sending = false;
        console.error(err);
        setTimeout(() => this.cdr.detectChanges(), 0);
      }
    });
  }

  onSubmit() {
    this.sendMessage();
  }
}
