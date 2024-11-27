import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { project } from '../models/project'; 
import { addDoc, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'; 
import { Timestamp } from 'firebase/firestore'; 

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectsCollection;

  constructor(private firestore: Firestore) {
    this.projectsCollection = collection(this.firestore, 'projects');
  }

  addProject(project: project): Promise<DocumentReference<any>> {
    return addDoc(this.projectsCollection, project);
  }

  getProjects(): Observable<project[]> {
    return collectionData(this.projectsCollection, { idField: 'id' }).pipe(
      map((projects: any[]) => {
        return projects.map(project => {
          return {
            ...project,
            startDate: project.startDate instanceof Timestamp ? project.startDate.toDate() : new Date(project.startDate),
            endDate: project.endDate instanceof Timestamp ? project.endDate.toDate() : new Date(project.endDate),
          };
        });
      })
    );
  }

  updateProject(id: string, project: Partial<project>): Promise<void> {
    const projectDoc = doc(this.firestore, `projects/${id}`);
    return updateDoc(projectDoc, project);
  }

  deleteProject(id: string): Promise<void> {
    const projectDoc = doc(this.firestore, `projects/${id}`);
    return deleteDoc(projectDoc);
  }
}
