// src/app/teams/teams.component.ts
import { Component, OnInit } from '@angular/core';
import { TeamMemberService } from '../services/team-member.service';  // Import the service
import { TeamMember } from '../models/member';
import { NavsComponent } from "../navs/navs.component";  // Import the model

@Component({
  selector: 'app-tealms',
  standalone: true,
  imports: [NavsComponent],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class teams implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
