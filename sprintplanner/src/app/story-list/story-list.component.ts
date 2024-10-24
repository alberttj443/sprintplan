import { Component } from '@angular/core';
import { StoryDetailFormComponent } from '../story-detail-form/story-detail-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Story } from '../model/story';
import { StorymanageService } from '../services/storymanage.service';

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [StoryDetailFormComponent, CommonModule],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.scss'
})
export class StoryListComponent {
  displayDetailForm: boolean = false;
  formData: Story | null = null;
  storiesList: Story[] = [];
  constructor(private storyService: StorymanageService) { }

  onAdd() {
    this.formData = null;
    this.displayDetailForm = true;
  }

  onEdit(data: Story) {
    this.formData = data;
    this.displayDetailForm = true;
  }

  onDelete(data: Story) {
    if(data.id){
      this.storyService.onDelete(data.id);
      this.storiesList = this.storyService.storiesList;
    }
    
  }

  onCloseDetailForm(event: boolean) {
    if (event) {
      this.storiesList = this.storyService.storiesList;
    }
    this.displayDetailForm = false;
  }
}
