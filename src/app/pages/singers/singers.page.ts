import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SingersService } from '../singers.service';

@Component({
  selector: 'app-singers',
  templateUrl: './singers.page.html',
  styleUrls: ['./singers.page.scss'],
})
export class SingersPage implements OnInit {

  singers: Observable<any>

  constructor(private singersService: SingersService) { 
    this.singers = this.singersService.getSingers()
  }

  ngOnInit() {
  }

}
