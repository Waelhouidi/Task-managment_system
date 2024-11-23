import { Routes } from '@angular/router';
import { ProjectsComponent } from './cards/cards.component';
import { ProjectListComponent } from './projects-list/projects-list.component';

export const routes: Routes = [
    {path: 'project', component:ProjectsComponent},
    {path: 'project-list', component:ProjectListComponent},
];
