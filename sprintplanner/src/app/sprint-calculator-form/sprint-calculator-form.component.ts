import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorymanageService } from '../services/storymanage.service';
import { AutoSelectedSprintComponent } from '../auto-selected-sprint/auto-selected-sprint.component';

@Component({
  selector: 'app-sprint-calculator-form',
  standalone: true,
  imports: [FormsModule, 
    AutoSelectedSprintComponent,],

  templateUrl: './sprint-calculator-form.component.html',
  styleUrl: './sprint-calculator-form.component.scss'
})
export class SprintCalculatorFormComponent {
  sprintCapacity: number = 0;
  constructor(private storyService: StorymanageService) { }
  generateSprint() {
    this.storyService.generateSprint(this.sprintCapacity);
  }

  clearStories() {
    this.storyService.clearAll();
  }

  clearSelectedStories() {
    this.storyService.clearSelectedStories();
  }
}
