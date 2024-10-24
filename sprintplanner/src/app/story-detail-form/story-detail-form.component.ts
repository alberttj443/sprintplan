import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorymanageService } from '../services/storymanage.service';
import { debounceTime, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Story } from '../model/story';

@Component({
  selector: 'app-story-detail-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './story-detail-form.component.html',
  styleUrl: './story-detail-form.component.scss'
})
export class StoryDetailFormComponent  implements OnInit{
  storyForm: FormGroup; 
  isUniqueName:boolean=false;
  @Input() formData:Story | null =null;
  @Output() onClose = new EventEmitter<boolean>();
  private subscription: Subscription|undefined;  

  constructor(private fb: FormBuilder, private storyService:StorymanageService ) {
    this.storyForm = this.fb.group({
      id:[null],
      name: ['', Validators.required],
      point: [1, [Validators.required,Validators.min(1)]],
      description: ['']
    });
  }
  ngOnInit(): void {
    if(this.formData){
      this.storyForm.setValue(this.formData);
    }
    this.subscription= this.storyForm.get('name')?.valueChanges
    .pipe(debounceTime(100))  
    .subscribe((value) => {
      this.isUniqueName=(this.storyService.duplicateCheck(value,this.storyForm.value.id)); 
    });
  }
  ngOnDestroy(): void {  
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit(): void { 
  if(this.storyForm.valid){
    const value=this.storyForm.value;  
    this.storyService.saveStory(value)
  }
  this.onClose.emit(true);
  }
  onCloseForm(){
    this.onClose.emit(false);
  }
}
