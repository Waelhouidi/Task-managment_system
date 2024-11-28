import { Component } from '@angular/core';
import { TeamMemberService } from '../../../services/team-member.service';
import { TeamMember } from '../../../models/member';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavsComponent } from "../../../navs/navs.component";

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

  constructor(private teamMemberService: TeamMemberService) {}

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
}
