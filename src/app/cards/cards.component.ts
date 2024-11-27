import { Component, OnInit } from '@angular/core';
import { project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavsComponent } from "../navs/navs.component"; 

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, NavsComponent],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: project[] = [];
  newProject: project = {
    id: 0,
    name: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    status: 'important',
  };

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.fetchProjects();
  }

  // Fetch projects from Firestore
  fetchProjects() {
    console.log('Fetching projects from Firestore');
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  // Add a new project
  addProject() {
    this.projectService.addProject(this.newProject).then(() => {
      this.newProject = {
        id: 0,
        name: '',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        status: 'important',
      };
    });
  }

  // Delete a project
  deleteProject(id: string) {
    this.projectService.deleteProject(id);
  }
}
