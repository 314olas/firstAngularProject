import { Component, OnInit } from '@angular/core';
import {fade} from '../animation';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
  animations: [ fade ]
})
export class WhatWeDoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
