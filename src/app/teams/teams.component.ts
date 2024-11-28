import { Component, OnInit } from '@angular/core';
import { TeamMemberService } from '../services/team-member.service'; // Adjust path as needed
import { TeamMember } from '../models/member';
import { NavsComponent } from '../navs/navs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [NavsComponent,CommonModule],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamMembers: TeamMember[] = []; // Array to hold team members

  constructor(private teamMemberService: TeamMemberService) {}

  ngOnInit(): void {
    this.fetchTeamMembers();
  }

  // Fetch team members from Firestore
  fetchTeamMembers() {
    this.teamMemberService.getTeamMembers().subscribe(
      (members) => {
        this.teamMembers = members;
      },
      (error) => {
        console.error('Error fetching team members:', error);
      }
    );
  }
}
