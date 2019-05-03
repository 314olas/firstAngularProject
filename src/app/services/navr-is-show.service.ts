import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavrIsShowService {
  private isShow: BehaviorSubject<string> = new BehaviorSubject('none');
  public isShow$: Observable<string>;

  constructor() {
    this.isShow$ = this.isShow.asObservable();
  }

  changeDisplay( str: string ) {
    this.isShow.next(str);
  }

  // this.isShow === 'none' ? this.isShow = 'block' : this.isShow = 'none';
}
