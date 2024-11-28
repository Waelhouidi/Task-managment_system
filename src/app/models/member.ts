import { Timestamp } from "firebase/firestore";

export interface TeamMember {
  id?: string;
  name: string;
  email: string;
  post: string;
  phone: string;
  project: string;
  startDate: Date | Timestamp;
  endDate: Date | Timestamp;
}
