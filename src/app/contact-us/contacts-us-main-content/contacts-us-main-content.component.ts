import { Component, OnInit } from '@angular/core';
import {fade} from '../../animation';
import {FormBuilder, FormArray, Validators} from '@angular/forms';
import { Observable, from } from 'rxjs';

// @ts-ignore
@Component({
  selector: 'app-contacts-us-main-content',
  templateUrl: './contacts-us-main-content.component.html',
  styleUrls: ['./contacts-us-main-content.component.scss'],
  animations: [ fade ]
})
export class ContactsUsMainContentComponent implements OnInit {
  myForm = this.myFormBilder.group({
    name: ['', Validators.minLength(2)],
    email: [''],
    message: []
  });

  constructor( private myFormBilder: FormBuilder) { }

  ngOnInit() {
    const formObserv = Observable.create((obs) => {
      obs.next(3);
    });

    console.log('started');
    // from( this.myForm ).subscribe( () => console.log('Done'));
    const sub = formObserv.subscribe((value) => console.log('next' + value));
  }

  onSubmit() {
    console.log(this.myForm);
    }

}
