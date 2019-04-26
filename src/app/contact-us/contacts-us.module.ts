import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactsUsLinksComponent } from './contacts-us-links/contacts-us-links.component';
import { ContactsUsMainContentComponent } from './contacts-us-main-content/contacts-us-main-content.component';

import { ContactUsRoutingModule } from './contact-us-routing.module';

@NgModule({
  declarations: [
    ContactsUsLinksComponent,
    ContactsUsMainContentComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactsUsModule { }
