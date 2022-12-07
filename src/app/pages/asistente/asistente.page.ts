import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asistente',
  templateUrl: './asistente.page.html',
  styleUrls: ['./asistente.page.scss'],
})
export class AsistentePage implements OnInit {

  attendeeName: string
  public asistentes: any = {}
  public eventId: string

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id')
    this.asistentes = this.eventService.getAttendeeList(this.eventId)
  }

  addAttendee(
    attendeeName: string,
  ): void {
    if (
      attendeeName === undefined
    ) {
      return;
    }
    this.eventService.addAttendees(attendeeName).then(() => {
        this.router.navigateByUrl('event-list');
      })
  }



}
