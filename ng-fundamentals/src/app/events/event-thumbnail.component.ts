import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: ` <div class="well hoverwell thumbnail">
    <h2>{{ event.name }}</h2>
    <div>Date: {{ event.date }}</div>
    <div>Time: {{ event.time }}</div>
    <div>Price: ₹{{ event.date }}</div>
    <div>
      <span>Location: {{ event.location.address }}</span>
      <!-- <span>&nbsp;</span> -->
      <span class="pad-left">{{ event.location.city }}, {{ event.location.country }}</span>
    </div>
  </div>`,

  styles: [`.pad-left{margin-left:10px;}
  .well div {color: #89319;}`]
})
export class EventThumbnailComponent {
  @Input() event: any;

  someProperty: any = "some value";

  logFoo(){
    console.log('foo');

  }
}
