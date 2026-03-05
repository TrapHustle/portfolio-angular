import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    fullName: '',
    email: '',
    message: ''
  };

  submitted = false;
  loading = false;

  onSubmit() {
    if (this.formData.fullName && this.formData.email && this.formData.message) {
      this.loading = true;
      // Simulate API call
      setTimeout(() => {
        this.submitted = true;
        this.loading = false;
        this.formData = { fullName: '', email: '', message: '' };
        
        // Reset message after 5 seconds
        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      }, 1000);
    }
  }
}
