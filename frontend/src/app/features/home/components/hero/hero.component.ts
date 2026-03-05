import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  avatarUrl: string = '';
  firstName: string = '';
  lastName: string = '';
  isAvailable: boolean = false;
  cvUrl: string = '';

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.http.get<any[]>('/api/users/').subscribe({
      next: (users) => {
        const user = users[0];
        this.avatarUrl = user.avatar?.replace('http://localhost:8000', '') || '';
        this.firstName = user.first_name;
        this.lastName = user.last_name;
        this.isAvailable = user.is_available;
        this.cvUrl = user.cv?.replace('http://localhost:8000', '') || '';
        console.log('avatarUrl:', this.avatarUrl);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('ERREUR:', err)
    });
  }

  downloadCV() {
    if (this.cvUrl) window.open(this.cvUrl, '_blank');
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
