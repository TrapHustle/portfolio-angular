import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stakes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stakes.component.html',
  styleUrls: ['./stakes.component.scss']
})
export class StakesComponent {
  stakes = [
  { name: 'Figma', description: 'Design Tool', icon: 'assets/icons/figma.svg' },
  { name: 'VS Code', description: 'Code Editor', icon: 'assets/icons/vscode.svg' },
  { name: 'Python', description: 'Programming Language', icon: 'assets/icons/python.svg' },
  { name: 'Django', description: 'Web Framework', icon: 'assets/icons/django.svg' },
  { name: 'Odoo', description: 'ERP Platform', icon: 'assets/icons/odoo.svg' },
  { name: 'Java', description: 'Desktop Development', icon: 'assets/icons/java.svg' },
];
}
