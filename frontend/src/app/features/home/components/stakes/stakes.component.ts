import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../shared/services/api.service';
import { IStake } from '../../../../shared/models/interfaces';

@Component({
  selector: 'app-stakes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stakes.component.html',
  styleUrls: ['./stakes.component.scss']
})
export class StakesComponent implements OnInit {
  stakes: IStake[] = [];

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.api.getStakes().subscribe({
      next: (data) => {
        this.stakes = data;
        setTimeout(() => this.cdr.detectChanges(), 0);
      },
      error: (err) => console.error('ERREUR stakes:', err)
    });
  }
}
