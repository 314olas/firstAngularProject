import { Injectable } from '@angular/core';

export interface Contacts {
  name: string;
  email: string;
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class ContactPostRequestService {


  constructor() { }

  addContact(obj: Contacts) {
    console.log(obj);
  }

}
