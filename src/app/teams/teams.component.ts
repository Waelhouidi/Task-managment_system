// src/app/teams/teams.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeamMemberService } from '../services/team-member.service';  // Import the service
import { TeamMember } from '../models/member';  // Import the model

@Component({
  selector: 'app-tealms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TealmsComponent implements OnInit {
  taskForm: FormGroup;  // Declare FormGroup

  constructor(private fb: FormBuilder, private teamMemberService: TeamMemberService) {
    // Initialize the form in the constructor
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      post: ['', Validators.required],
      phone: ['', Validators.required],
      project: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  // Submit handler
  onSubmit(): void {
    if (this.taskForm.valid) {
      const formData: TeamMember = this.taskForm.value;
      this.addTeamMember(formData);
    }
  }

  // Method to add a new team member to Firestore
  private addTeamMember(teamMember: TeamMember): void {
    this.teamMemberService.addTeamMember(teamMember)
      .then(() => {
        console.log('Team member added successfully!');
        this.resetForm();
      })
      .catch((error) => {
        console.error('Error adding team member:', error);
      });
  }

  // Method to reset the form after submission
  private resetForm(): void {
    this.taskForm.reset();
  }
}
