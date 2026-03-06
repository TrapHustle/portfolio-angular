
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../shared/services/api.service';
import { IProject } from '../../../../shared/models/interfaces';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.api.getProjects().subscribe({
      next: (data) => {
        this.projects = data.map(p => ({
          ...p,
          image: p.image?.replace('http://localhost:8000', environment.apiUrl) || ''
        }));
        console.log('PROJECTS:', this.projects);
        setTimeout(() => {
          this.cdr.detectChanges();
        }, 0);
      },
      error: (err) => console.error('ERREUR:', err)
    });
  }
}
