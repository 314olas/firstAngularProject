import { Component, OnInit } from '@angular/core';
import {fade} from '../animation';
import {GetLatestWorkService} from './get-latest-work.service';
import {Filters} from '../models/filters.enum';
import {FilterService} from '../services/filter.service';
import {DefineCurrentWorksService} from '../services/define-current-works.service';
import {NavrIsShowService} from '../services/navr-is-show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ fade ],
  providers: [ GetLatestWorkService ]
})
export class HomeComponent implements OnInit {
  filters = Filters;
  num: number;
  isShow: string;

  constructor(
    private filterService: FilterService,
    private currentWorks: DefineCurrentWorksService,
    private navbarIsShowService: NavrIsShowService,
  ) { }

  ngOnInit() {
    this.currentWorks.currentNumber$.subscribe(x => this.num = x);
    this.navbarIsShowService.isShow$.subscribe(value => this.isShow = value);
  }

  filterHendler(param: Filters) {
    this.filterService.updateFilter(param);
  }

  addMoreWorks() {
    this.currentWorks.currentWorksNumber(this.num + 3);
    }

  showNav() {
    if (this.isShow === 'block'){
      this.navbarIsShowService.changeDisplay('none');
    }
  }
}
