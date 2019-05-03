import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Filters} from '../models/filters.enum';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filter: BehaviorSubject<Filters> = new BehaviorSubject(Filters.all);
  public filter$: Observable<Filters>;

  constructor() {
    this.filter$ = this.filter.asObservable();
  }

  updateFilter(filter: Filters): void {
    this.filter.next(filter);
  }
}
