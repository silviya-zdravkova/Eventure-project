import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { EventInterface } from '../../types/event';

@Component({
  selector: 'app-current-event',
  standalone: true,
  imports: [],
  templateUrl: './current-event.component.html',
  styleUrl: './current-event.component.css'
})
export class CurrentEventComponent implements OnInit {
  curEvent = {} as EventInterface;

  constructor (private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {

    // this.route.params.subscribe((data) => {
    //   console.log(data['eventId']);
    // })

    const id = this.route.snapshot.params['eventId'];

    this.apiService.getSingleEvent(id).subscribe(curEvent => {
      this.curEvent = curEvent;
      
    })




  }

}
