import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {

  public currentEvent: any = {}
  public eventId: string

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id')
    this.currentEvent = this.eventService.getEventDetail(this.eventId).valueChanges()
  }

}
