import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SliderItem} from '../interfaces/slider-item';

@Injectable({
  providedIn: 'root'
})
export class HttpGetSliderItemService {

  constructor( private http: HttpClient ) {
  }

  getItem() {
    return this.http.get<SliderItem[]>('http://www.mocky.io/v2/5ccc62023300006e5be01c96');
  }
}
