import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  public images: any
  constructor(private http: HttpClient) { }
  getImages(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
