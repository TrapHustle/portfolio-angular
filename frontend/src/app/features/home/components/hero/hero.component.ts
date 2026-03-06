
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../shared/services/api.service';
import { ISocialNetwork } from '../../../../shared/models/interfaces';
import { environment } from '../../../../../environments/environment';

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
  socialNetworks: ISocialNetwork[] = [];

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.http.get<any[]>(`${environment.apiUrl}/api/users/`).subscribe({
      next: (users) => {
        const user = users[0];
        this.avatarUrl = user.avatar?.replace('http://localhost:8000', environment.apiUrl) || '';
        this.firstName = user.first_name;
        this.lastName = user.last_name;
        this.isAvailable = user.is_available;
        this.cvUrl = user.cv?.replace('http://localhost:8000', environment.apiUrl) || '';
        setTimeout(() => this.cdr.detectChanges(), 0);
      },
      error: (err) => console.error('ERREUR user:', err)
    });

    this.api.getSocialNetworks().subscribe({
      next: (data) => {
        console.log('SOCIAL NETWORKS:', data);
        this.socialNetworks = data;
        setTimeout(() => this.cdr.detectChanges(), 0);
      },
      error: (err) => console.error('ERREUR socials:', err)
    });
  }

  downloadCV() {
    if (this.cvUrl) window.open(this.cvUrl, '_blank');
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
