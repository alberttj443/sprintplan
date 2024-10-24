import { Injectable } from '@angular/core';
import { Story } from '../model/story';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StorymanageService {
  constructor(
    private toastr: ToastrService) { }
  storiesList :Story[] = []; 

   selectedStoriesSubject = new BehaviorSubject<Story[]|null>(null); //used subject for using selected story. (bcz of multicasting feature)

  saveStory(story: Story): boolean {
    if (this.storiesList.find(s => s.name === story.name && s.id!=story.id)) { 
      this.toastr.error('Name already exists')
      return false;  
    }
    if(!story.id){//insert 
      story.id=new Date().getMilliseconds(); // unique id for updation
      this.storiesList.push(story);
      this.toastr.success('Saved successfully');

    }
    else{// update
      const index = this.storiesList.findIndex(item => item.id === story.id);
      if (index !== -1) { 
        this.storiesList[index] = story;
        this.toastr.success('Updated successfully');
      } else {
        console.error(`Item   not found.`);
        this.toastr.error('Item   not found.');
        return false; 
      }

    }
    
    return true;
  }

  duplicateCheck(name:string,id:number|null):boolean{
     return this.storiesList.find(s => s.name === name && s.id!=id)?true:false;
  }
  onDelete(id:number){
    const index = this.storiesList.findIndex(item => item.id === id);
    this.storiesList.splice(index,1);
    this.toastr.success('Removed successfully');
    return true;
  }
  generateSprint(capacity:number){
    let result=[];
    const sortedStories = [...this.storiesList].sort((a, b) => a.point - b.point);
    let totalPoints = 0;
    for (const story of sortedStories) {
      if (totalPoints + story.point <= capacity) {
        result.push(story);
        totalPoints += story.point;
      }
    }
    this.selectedStoriesSubject.next(result);
  }
  clearAll(){
    this.storiesList=[];
    this.selectedStoriesSubject.next(null);
  }
  clearSelectedStories(){
    this.selectedStoriesSubject.next(null);
  }
}
