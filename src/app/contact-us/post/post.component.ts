import {Component, Input, OnInit} from '@angular/core';

import { PostData } from '../posts.service';
import {BtnColor} from '../../models/btn-color.enum';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() item: PostData;

  getBtnClass(color: string) {
    return BtnColor[color];
  }

}
