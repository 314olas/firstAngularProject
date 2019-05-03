import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ContactPostRequestService} from '../contact-post-request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
  providers: [ ContactPostRequestService ]
})
export class ContactUsFormComponent implements OnInit {
  myForm = this.myFormBilder.group({
    name: ['', [Validators.minLength(2), Validators.required]],
    email: ['', Validators.required],
    message: ['', Validators.required]
  });
  myFormVal: Subscription;

  constructor( private myFormBilder: FormBuilder,
               private postRequest: ContactPostRequestService,
               private router: Router
  ) { }

  ngOnInit() {
    // this.myFormVal = this.myForm.valueChanges.subscribe(
    //   () => console.log(this.myForm)
    // );

  }

  onSubmit() {
    this.postRequest.addContact({name: this.myForm.value.name, email: this.myForm.value.email, message: this.myForm.value.message});
    this.router.navigate(['/success']);
  }
}
