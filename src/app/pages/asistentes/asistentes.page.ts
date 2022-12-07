import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-asistentes',
  templateUrl: './asistentes.page.html',
  styleUrls: ['./asistentes.page.scss'],
})
export class AsistentesPage implements OnInit {

  asistenteList: any = []
  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    console.log(typeof(this.asistenteList));
    this.asistenteList = this.eventService.getAsistentesList()
  }

}
