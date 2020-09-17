import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <div>
  <h1>Upcoming Angular Events</h1>
  <event-thumbnail (eventClick)="handleEventClicked($event)"
  [event]="event1"></event-thumbnail>

</div>
`,
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '3 / 9 / 2021',
    time: '10:00 AM',
    price: '699.99',
    imageUrl: '/assets/images/basic-shield.png',
    location: {
      address:  '136 PTB ',
      city: 'New York',
      country: 'US'
    }
  };

  handleEventClicked(data){
    console.log('received:', data);

  }
}
