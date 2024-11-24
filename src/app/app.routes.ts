import { Routes } from '@angular/router';
import { ProjectsComponent } from './cards/cards.component';
import { ProjectListComponent } from './projects-list/projects-list.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  { path: "", component: ProjectListComponent, canActivate: [AuthGuard] },
  {path:"login",component:LoginComponent},
    {path: 'project', component:ProjectsComponent},
    {path: 'project-list', component:ProjectListComponent},
];
