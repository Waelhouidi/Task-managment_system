import { TeamMember } from "./member";

export interface TeamService {
selectedMember: any;
selectedProject: any;
    id: string;
    name?: string;
    members?: Array<TeamMember>;
    images?: string;
    projectName?: string; 
  }
  