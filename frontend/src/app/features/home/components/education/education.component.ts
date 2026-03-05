import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../shared/services/api.service';
import { IEducation } from '../../../../shared/models/interfaces';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education: IEducation[] = [];

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.api.getEducation().subscribe({
      next: (data) => {
        this.education = data;
        console.log('EDUCATION:', this.education);
        setTimeout(() => {
          this.cdr.detectChanges();
        }, 0);
      },
      error: (err) => console.error('ERREUR education:', err)
    });
  }
}
