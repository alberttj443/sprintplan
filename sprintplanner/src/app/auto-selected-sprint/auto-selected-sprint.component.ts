import { Component, Input } from '@angular/core';
import { StorymanageService } from '../services/storymanage.service';
import { Story } from '../model/story';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auto-selected-sprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto-selected-sprint.component.html',
  styleUrl: './auto-selected-sprint.component.scss'
})
export class AutoSelectedSprintComponent {
  selectedStories: Story[] |null= null;
  constructor(private storyService: StorymanageService) { }
  subscription: Subscription | undefined;
  @Input() sprintCapacity:number|null=null;
  ngOnInit(): void {

    this.subscription = this.storyService.selectedStoriesSubject.subscribe(data => {
       
      this.selectedStories = data;
    }) 
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
