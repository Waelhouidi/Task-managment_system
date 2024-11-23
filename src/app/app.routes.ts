import { Routes } from '@angular/router';
import { ProjectsComponent } from './cards/cards.component';
import { ProjectListComponent } from './projects-list/projects-list.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    {path: 'project', component:ProjectsComponent},
    {path: 'project-list', component:ProjectListComponent},
  {path:'signin', component:SigninComponent},
  {path:'register', component:RegisterComponent},
];
