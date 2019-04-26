import { Injectable } from '@angular/core';
import { Links } from './links';

@Injectable({
  providedIn: 'root'
})
export class HeaderLinksService {

  getLinks() {
    return  Links ;
  }

}
