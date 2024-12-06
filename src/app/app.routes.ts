import { Routes } from '@angular/router';
import { ProjectsComponent } from './cards/cards.component';
import { ProjectListComponent } from './projects-list/projects-list.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectDeatilsComponent } from './project-deatils/project-deatils.component';
import { ProfileComponent } from './shareds/alleditsteam/member-display/member-display.component';
import { TeamServiceComponent } from './Department/team-service.component';
import { empComponent } from './members-cards/members-cards.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'project', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: 'project-list', component: ProjectListComponent, canActivate: [AuthGuard] },
  { path: 'project-details', component: ProjectDeatilsComponent },
  { path: 'member', component: ProfileComponent },
  { path: 'department', component: TeamServiceComponent },
  { path: 'cardsM', component: empComponent },
];
