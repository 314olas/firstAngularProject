import { Component, OnInit } from '@angular/core';
import { Links } from './links';
import { HeaderLinksService } from './header-links.service';
import {NavrIsShowService} from '../services/navr-is-show.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: string[];
  isShow: string;

  constructor(
    private linksService: HeaderLinksService,
    private navbarIsShowService: NavrIsShowService,
    ) {
    this.links = linksService.getLinks();
  }

  ngOnInit() {
    this.navbarIsShowService.isShow$.subscribe(value => this.isShow = value);
  }

  showNavbar() {
    this.isShow === 'none' ? this.navbarIsShowService.changeDisplay('block') : this.navbarIsShowService.changeDisplay('none');
  }

}
