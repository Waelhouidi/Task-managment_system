import { Component, OnInit } from '@angular/core';
import { TeamServiceManager } from '../services/team.service'; // Update path as needed
import { Observable } from 'rxjs';
import { TeamService } from '../models/teams-service'; // Update path as needed
import { Firestore, collection, collectionData, doc, getDocs } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavsComponent } from "../navs/navs.component";
import { ProjectService } from '../services/project.service';
import { project } from '../models/project';

@Component({
  selector: 'app-team-service',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavsComponent],
  templateUrl: './team-service.component.html',
  styleUrls: ['./team-service.component.css']
})
export class TeamServiceComponent implements OnInit {
  teamForm: FormGroup;
  teams$: Observable<TeamService[]> | undefined;
  members: any[] = []; // Array to store members from Firestore
  projects: any[] = []; // Array to store projects from Firestore
  projectStatus: project[] = [];


  constructor(
    private teamServiceManager: TeamServiceManager,
    private firestore: Firestore,
    private fb: FormBuilder,
    public satusProject:ProjectService
  ) {
    this.teamForm = this.fb.group({
      name: [''],
      image: [''],
      selectedMember: [[]], // Initialize as an array for multi-selection
      selectedProject: [[]] // Initialize as an array for multi-selection
    });
  }


  ngOnInit(): void {
    this.teams$ = this.teamServiceManager.getTeams();
    this.loadMembers();
    this.loadProjects();
  }

  // Load members from Firestore (assuming a collection named 'members')
  private async loadMembers() {
    const memberCollection = collection(this.firestore, 'teamMembers');
    const memberSnapshot = await getDocs(memberCollection);
    this.members = memberSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  // Load projects from Firestore (assuming a collection named 'projects')
  private async loadProjects() {
    const projectCollection = collection(this.firestore, 'projects');
    const projectSnapshot = await getDocs(projectCollection);
    this.projects = projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  // Add a new team
  addTeam() {
    if (this.teamForm.valid) {
      const teamData = this.teamForm.value;
      this.teamServiceManager.addTeam(teamData).then(() => {
        console.log('Team added successfully');
        this.teamForm.reset();
      });
    }
  }

  // Get project name by ID
  getProjectNameById(projectId: string): string {
    const project = this.projects.find(p => p.id === projectId);
    return project ? project.name : 'Unknown Project';
  }

  // Get member name by ID
  getMemberNameById(memberId: string): string {
    const member = this.members.find(m => m.id === memberId);
    return member ? member.name : 'Unknown Member';
  }

  // Display team details
  showDetails(team: TeamService) {
    console.log('Team Details:', team);
    // Implement a modal or details view if needed
  }

  // Delete a team
  deleteTeam(id: string) {
    this.teamServiceManager.deleteTeam(id).then(() => {
      console.log('Team deleted successfully');
    });
  }

  // Modify a team (similar to update)
  modifyTeam(id: string) {
    const updatedTeam = { ...this.teamForm.value };
    this.teamServiceManager.updateTeam(id, updatedTeam).then(() => {
      console.log('Team modified successfully');
    });
  }
  fetchProjects() {
    this.satusProject.getProjects().subscribe((data) => {
      this.projectStatus = data;
    });
  }
  isFormVisible = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;

  }
  x(){
    this.isFormVisible = false;
  }
}