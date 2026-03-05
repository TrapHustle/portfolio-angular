import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../shared/services/api.service';
import { ISkill } from '../../../../shared/models/interfaces';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: ISkill[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getSkills().subscribe(data => {
      this.skills = data;
    });
  }
}
