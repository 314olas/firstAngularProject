import { Component, OnInit, OnDestroy } from '@angular/core';
import {fade} from '../../animation';
import {FormBuilder, FormArray, Validators} from '@angular/forms';
import {Observable, from, Subscription} from 'rxjs';

// @ts-ignore
@Component({
  selector: 'app-contacts-us-main-content',
  templateUrl: './contacts-us-main-content.component.html',
  styleUrls: ['./contacts-us-main-content.component.scss'],
  animations: [ fade ]
})
export class ContactsUsMainContentComponent implements OnInit, OnDestroy {
  myForm = this.myFormBilder.group({
    name: ['', Validators.minLength(2)],
    email: [''],
    message: []
  });
  myFormVal: Subscription;

  constructor( private myFormBilder: FormBuilder) { }

  ngOnInit() {
    this.myFormVal = this.myForm.get('name').valueChanges.subscribe(
      () => console.log(this.myForm)
    );
  }

  ngOnDestroy() {

  }

  onSubmit() {
    this.myFormVal.unsubscribe();
    }

}
