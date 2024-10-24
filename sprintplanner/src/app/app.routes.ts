import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/story', pathMatch: 'full' },
    {
        path: 'story',
        loadComponent: () => import('./story-list/story-list.component').then(m => m.StoryListComponent)
    },
    {
        path: 'sprint',
        loadComponent: () => import('./sprint-calculator-form/sprint-calculator-form.component').then(m => m.SprintCalculatorFormComponent)
    }
];
