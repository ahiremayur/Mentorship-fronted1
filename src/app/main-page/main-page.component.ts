import { Component } from '@angular/core';
import events from 'src/event-data.json';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  events:any = events.events;
  // events = [
  //   {
  //     id: 1111,
  //     img: 'jbkbkbkhbk',
  //     title: 'Kaladarshan',
  //     description: 'This is the description....',
  //     date: '2023-03-01',
  //     venue: 'New York',
  //     favoption: false
  //   },
  //   {
  //     id: 1112,
  //     img: 'jbkbkbkhbk',
  //     title: 'Kaladarshan',
  //     description: 'This is the description....',
  //     date: '2023-03-15',
  //     venue: 'Los Angeles',
  //     favoption: true
  //   },
  //   {
  //     id: 1113,
  //     img: 'jbkbkbkhbk',
  //     title: 'Kaladarshan',
  //     description: 'This is the description....',
  //     date: '2023-04-01',
  //     venue: 'Chicago',
  //     favoption: true
  //   }
  // ];
  selectedEvent:any=events[0];
  changefav(i: Number) {
    for (let object of this.events) {
      if (object.id === i) {
        object.favoption = !object.favoption;
        console.log(object);
      }
    }
  }
}
