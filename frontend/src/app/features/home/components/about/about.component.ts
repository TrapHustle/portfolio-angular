import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutText = `I am a Bachelor's student in Software Engineering at the Ivorian Institute of Technology, passionate about software development and web technologies. Curious, rigorous, and solution-oriented, I enjoy designing high-performance and well-structured applications, from frontend to backend.

I am particularly interested in Full Stack development, application architecture, and best practices such as Docker, Git, and Linux environments. I place great importance on code quality, security, and performance optimization.

Always eager to learn and tackle technical challenges, I aim to apply my skills to concrete projects in order to continue progressing and bringing value to a team.`;

  skills = ['Web Development', 'UI/UX Design', 'Mobile Development', 'Cloud Architecture'];
}
