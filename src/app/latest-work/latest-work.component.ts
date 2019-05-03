import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {GetLatestWorkService} from '../home/get-latest-work.service';
import {FilterService} from '../services/filter.service';
import {Filters} from '../models/filters.enum';
import {FilterItem} from '../interfaces/filter-item';
import {combineLatest, Subject, Subscription} from 'rxjs';
import {DefineCurrentWorksService} from '../services/define-current-works.service';

@Component({
  selector: 'app-latest-work',
  templateUrl: './latest-work.component.html',
  styleUrls: ['./latest-work.component.scss']
})



export class LatestWorkComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();
  filter: Filters;
  itemsToDisplay: Subject<FilterItem[]> = new Subject();


  constructor(
    private getWorks: GetLatestWorkService,
    private filterService: FilterService,
    private currentWorksService: DefineCurrentWorksService,
  ) { }

  ngOnInit() {
    const displayData = combineLatest([
      this.currentWorksService.currentNumber$,
      this.getWorks.getWork()
    ]);

    this.subscriptions.add(
      displayData.subscribe(
        obsArr => {
          // obsArr[0] > obsArr[1].lenght ? obsArr[0] = obsArr[1].lenght : this.itemsToDisplay.next(obsArr[1].slice(0, obsArr[0]));
          this.itemsToDisplay.next(obsArr[1].slice(0, obsArr[0]));
        })
    );

    this.filterService.filter$.subscribe(
      filter => this.filter = filter
    );

    this.onResize();
  }

  checkFilter(filter: Filters): boolean {
    return this.filter ? filter === this.filter : true;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.itemsToDisplay.complete();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const winWidth = window.innerWidth;
    this.currentWorksService.currentWorksNumber( winWidth > 1199 ? 10 : winWidth > 520 ? 4 : 3);
  }
}
