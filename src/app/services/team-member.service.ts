// src/app/services/team-member.service.ts

import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TeamMember } from '../models/member';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TeamMemberService {
  private teamMembersCollection;
  projectsCollection: import("@angular/fire/firestore").CollectionReference<import("@angular/fire/firestore").DocumentData, import("@angular/fire/firestore").DocumentData>;

  constructor(private firestore: Firestore) {
    // Reference to the 'teamMembers' collection in Firestore
    this.teamMembersCollection = collection(this.firestore, 'teamMembers');
    this.projectsCollection = collection(this.firestore, 'projects');  // Assuming 'projects' collection exists
    this.projectsCollection = collection(this.firestore, 'postes');  
  }

  // Method to add a new team member
  addTeamMember(teamMember: TeamMember): Promise<DocumentReference<any>> {
    return addDoc(this.teamMembersCollection, teamMember); // Adds new team member to Firestore
  }

  // Method to get all team members
  getTeamMembers(): Observable<TeamMember[]> {
    return collectionData(this.teamMembersCollection, { idField: 'id' }).pipe(
      map((teamMembers: any[]) => {
        return teamMembers.map((member) => {
          return {
            ...member,
            startDate: member.startDate.toDate(), // Convert Firestore Timestamp to Date
            endDate: member.endDate.toDate(), // Convert Firestore Timestamp to Date
          };
        });
      })
    );
  }

  // Method to update a team member by ID
  updateTeamMember(id: string, teamMember: Partial<TeamMember>): Promise<void> {
    const teamMemberDoc = doc(this.firestore, `teamMembers/${id}`);
    return updateDoc(teamMemberDoc, teamMember); // Update the team member document in Firestore
  }

  // Method to delete a team member by ID
  deleteTeamMember(id: string): Promise<void> {
    const teamMemberDoc = doc(this.firestore, `teamMembers/${id}`);
    return deleteDoc(teamMemberDoc); // Delete the team member document from Firestore
  }
  getProjects(): Observable<any[]> {
    return collectionData(this.projectsCollection, { idField: 'id' });
  }
}

