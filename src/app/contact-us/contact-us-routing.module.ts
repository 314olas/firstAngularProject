import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactsUsMainContentComponent } from './contacts-us-main-content/contacts-us-main-content.component';
import { ContactsUsLinksComponent } from './contacts-us-links/contacts-us-links.component';

const routes: Routes = [
  {
    path: 'contact us',
    component: ContactsUsMainContentComponent,
    children: [
      {
        path: 'links',
        component: ContactsUsLinksComponent,
      }
      ]
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactUsRoutingModule { }
