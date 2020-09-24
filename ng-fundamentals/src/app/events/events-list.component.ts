import { toBase64String } from '@angular/compiler/src/output/source_map';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

// declare let toastr;
@Component({
  // selector: 'events-list',
  template: `
    <div>
      <h1 class="display-4">Upcoming Angular Events</h1>

      <section class="container-fluid  ">
        <div class="row row-cols-3 p-4">
          <!-- <div class="col-sm"> -->
          <section *ngFor="let event of events">
            <hr />
            <event-thumbnail
              #thumbnail
              (click)="handleThumbnailClick(event.name)"
              [event]="event"
            ></event-thumbnail>
          </section>
        </div>
      </section>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  // toastr: any;
  // toastr: any;

  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
