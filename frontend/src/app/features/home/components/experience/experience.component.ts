import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../shared/services/api.service';

import { IExperience } from '../../../../shared/models/interfaces';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: IExperience[] = [];

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.api.getExperiences().subscribe({
      next: (data) => {
        this.experiences = data;
        console.log('EXPERIENCES:', this.experiences);
        setTimeout(() => {
          this.cdr.detectChanges();
        }, 0);
      },
      error: (err) => console.error('ERREUR experience:', err)
    });
  }

  getLogoUrl(url: string | null): string {
    if (!url) return '';
    return url.replace('http://localhost:8000', environment.apiUrl);
  }
}
