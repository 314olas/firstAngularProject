import { Component, OnInit } from '@angular/core';
import {fade} from '../animation';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  animations: [ fade ]
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
