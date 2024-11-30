import { Component } from '@angular/core';
import { TeamMemberService } from '../../../services/team-member.service';
import { TeamMember } from '../../../models/member';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavsComponent } from "../../../navs/navs.component";
import { ProjectService } from '../../../services/project.service';
import { project } from '../../../models/project';
import { TeamServiceManager  } from '../../../services/team.service'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, NavsComponent],
  templateUrl: './member-display.component.html',
  styleUrls: ['./member-display.component.css']
})
export class ProfileComponent {
  teamMember: TeamMember = {
    name: '',
    email: '',
    post: '',
    phone: '',
    project: '',
    startDate: new Date(),
    endDate: new Date(),
  };
  projects: project[] = []; 
  deps: any[] =[] ;


  constructor(private teamMemberService: TeamMemberService,
    private projecty: ProjectService,
    private depy:TeamServiceManager,

  ) {}

  // Save profile to Firestore
  saveProfile() {
    this.teamMemberService
      .addTeamMember(this.teamMember)
      .then(() => {
        alert('Profile saved successfully!');
        this.resetForm();
      })
      .catch((error) => {
        console.error('Error saving profile:', error);
      });
  }
  isFormVisible = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;

  }
  // Reset form after save
  resetForm() {
    this.teamMember = {
      name: '',
      email: '',
      post: '',
      phone: '',
      project: '',
      startDate: new Date(),
      endDate: new Date(),
    };
  }
  ngOnInit(): void {
    this.loadProjects();
    this.loadDeps();
  }
  loadProjects() {
    this.projecty.getProjects().subscribe({
      next: (data: project[]) => {
        this.projects = data;
      },
      
    });
  }
  loadDeps(){
    this.depy.getTeams().subscribe({
      next: (data: any[]) => {
        this.deps=data;
    }})
  }
  
}
