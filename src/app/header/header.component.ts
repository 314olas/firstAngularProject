import { Component, OnInit } from '@angular/core';
import { Links } from './links';
import { HeaderLinksService } from './header-links.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: string[];

  constructor( linksService: HeaderLinksService ) {
    this.links = linksService.getLinks();
  }

  ngOnInit() {
  }

}
