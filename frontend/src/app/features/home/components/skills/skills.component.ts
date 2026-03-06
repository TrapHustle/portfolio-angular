import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../shared/services/api.service';
import { IStake } from '../../../../shared/models/interfaces';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: IStake[] = [];

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.api.getStakes().subscribe({
      next: (data) => {
        this.skills = data;
        setTimeout(() => this.cdr.detectChanges(), 0);
      },
      error: (err) => console.error('ERREUR:', err)
    });
  }
}
