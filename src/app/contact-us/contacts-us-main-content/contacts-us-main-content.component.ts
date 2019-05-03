import { Component, OnInit, OnDestroy } from '@angular/core';
import {fade} from '../../animation';
import {FormBuilder,  Validators} from '@angular/forms';
import {Observable, from, Subscription} from 'rxjs';


@Component({
  selector: 'app-contacts-us-main-content',
  templateUrl: './contacts-us-main-content.component.html',
  styleUrls: ['./contacts-us-main-content.component.scss'],
  animations: [ fade ]
})
export class ContactsUsMainContentComponent implements OnInit, OnDestroy {

  constructor( ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }



}
