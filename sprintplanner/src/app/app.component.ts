import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoryListComponent } from './story-list/story-list.component';
import { SprintCalculatorFormComponent } from './sprint-calculator-form/sprint-calculator-form.component'; 
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    StoryListComponent,
    SprintCalculatorFormComponent,
    MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sprintplanner';
}
