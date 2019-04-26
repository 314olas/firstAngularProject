import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {fade} from '../../animation';

@Component({
  selector: 'app-contacts-us-links',
  templateUrl: './contacts-us-links.component.html',
  styleUrls: ['./contacts-us-links.component.scss'],
  animations: [ fade ]

})
export class ContactsUsLinksComponent implements OnInit {

  state: RouterStateSnapshot;
  constructor(private router: Router ) { }

  ngOnInit() {
    console.log(this.router.url );
  }

  goBack() {
    this.router.navigate(['/contact us']);
    console.log( this.state );
  }

}
