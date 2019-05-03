import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-send-success-message',
  templateUrl: './send-success-message.component.html',
  styleUrls: ['./send-success-message.component.scss']
})
export class SendSuccessMessageComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

}
