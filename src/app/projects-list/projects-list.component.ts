import { Component, OnInit } from '@angular/core';
import { project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavsComponent } from "../navs/navs.component"; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectlist',
  standalone: true,
  imports: [CommonModule, FormsModule, NavsComponent],
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: project[] = [];
  router: any;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.fetchProjects();
  }
  modifyProject(id: string) {
    this.router.navigate(['/edit-project', id]); 
  }
  fetchProjects() {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  deleteProject(id: string) {
    this.projectService.deleteProject(id).then(() => {
      this.fetchProjects(); 
    });
  }
 
}
