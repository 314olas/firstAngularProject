import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefineCurrentWorksService {
  private currentNumber: BehaviorSubject<number> = new BehaviorSubject(0);
  public currentNumber$: Observable<number>;


  constructor() {
    this.currentNumber$ = this.currentNumber.asObservable();
  }

  currentWorksNumber( num: number ) {
    return this.currentNumber.next( num );
  }

}
