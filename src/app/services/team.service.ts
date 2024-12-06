import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { collectionData, Firestore, CollectionReference, collection, doc, setDoc, deleteDoc } from '@angular/fire/firestore';
import { TeamService } from '../models/teams-service'; // Update the path based on your file structure

@Injectable({
  providedIn: 'root',
})
export class TeamServiceManager {
  private teamCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.teamCollection = collection(this.firestore, 'teams'); // Use your Firestore collection name
  }

  // Fetch all teams
  getTeams(): Observable<TeamService[]> {
    return collectionData(this.teamCollection, { idField: 'id' }) as Observable<TeamService[]>;
  }

  // Add a new team
  addTeam(team: TeamService): Promise<void> {
    const teamDoc = doc(this.teamCollection);
    return setDoc(teamDoc, team);
  }

  // Update an existing team
  updateTeam(id: string, updatedTeam: Partial<TeamService>): Promise<void> {
    const teamDoc = doc(this.teamCollection, id);
    return setDoc(teamDoc, updatedTeam, { merge: true });
  }

  // Delete a team
  deleteTeam(id: string): Promise<void> {
    const teamDoc = doc(this.teamCollection, id);
    return deleteDoc(teamDoc);
  }
  showdetails(teamId: string){
    
  }
}
