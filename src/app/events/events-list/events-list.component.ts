import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { EventInterface } from '../../types/event';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent implements OnInit {
  events: EventInterface[] = [];

  constructor (private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getEvents().subscribe((events) => {
    
      this.events = events
      console.log(events);    
    })
  }
}
