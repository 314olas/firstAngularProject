import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpGetSliderItemService} from '../services/http-get-slider-item.service';
import {SliderItem} from '../interfaces/slider-item';
import { Subscription } from 'rxjs';
import {map} from 'rxjs/operators';
import {fade} from '../animation';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [fade]
})
export class SliderComponent implements OnInit, OnDestroy {
  items: SliderItem[] = [];
  counter = 0;
  allItems: Subscription;

  constructor(private getItem: HttpGetSliderItemService) { }

  ngOnInit() {
    this.allItems = this.getItem.getItem()
      .subscribe(value => {
      this.items = value;
    });
  }


  ngOnDestroy(): void {
    this.allItems.unsubscribe();

  }

  next() {
   const count = this.items.length - 1;
   this.counter = ( this.counter < count ) ? this.counter + 1 : 0;
  }

  prev() {
    const count = this.items.length - 1;
    this.counter = ( this.counter > 0 ) ? this.counter - 1 : count;
  }
}
