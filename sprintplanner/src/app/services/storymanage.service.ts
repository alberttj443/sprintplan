import { Injectable } from '@angular/core';
import { Story } from '../model/story';

@Injectable({
  providedIn: 'root'
})
export class StorymanageService {
  constructor() { }
  storiesList :Story[] = [];
  saveStory(story: Story): boolean {
    if (this.storiesList.find(s => s.name === story.name && s.id!=story.id)) {
      alert('Name already exists')
      return false;  
    }
    if(!story.id){//insert 
      story.id=new Date().getMilliseconds(); // unique id for updation
      this.storiesList.push(story);
    }
    else{// update
      const index = this.storiesList.findIndex(item => item.id === story.id);
      if (index !== -1) { 
        this.storiesList[index] = story;
      } else {
        console.error(`Item   not found.`);
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
    return true;
  }
}
