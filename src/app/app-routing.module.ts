import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ContactsUsModule } from './contact-us/contacts-us.module';

import { HomeComponent } from './home/home.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'testimonial', component: TestimonialsComponent },
  { path: 'what we do', component: WhatWeDoComponent },
  { path: 'contact us', loadChildren: './contacts-us/contact-us.module#ContactsUsModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
