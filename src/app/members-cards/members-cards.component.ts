import { Component } from '@angular/core';

@Component({
  selector: 'app-member-cards',
  templateUrl: './members-cards.component.html',
  styleUrls: ['./members-cards.component.css']
})
export class empComponent {
  // Ensure that there's no reference to 'comm' here unless it's declared.
  members = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      post: 'Software Engineer',
      phone: '123-456-7890',
      project: 'Project A',
      startDate: new Date('2024-01-15T08:30:00Z'),
      endDate: new Date('2024-12-30T17:00:00Z')
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      post: 'Project Manager',
      phone: '987-654-3210',
      project: 'Project B',
      startDate: new Date('2023-05-20T09:15:00Z'),
      endDate: new Date('2024-06-15T16:45:00Z')
    }
  ];
}
