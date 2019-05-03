import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FilterItem} from '../interfaces/filter-item';

@Injectable({
  providedIn: 'root'
})
export class GetLatestWorkService {


  constructor(private http: HttpClient) {
  }

  getWork() {
   return this.http.get<FilterItem[]>('http://www.mocky.io/v2/5ccaa9c26100002a00161f8a');
  }

}



