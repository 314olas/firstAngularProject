import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ContactsUsModule } from './contact-us/contacts-us.module';

import { HeaderComponent } from './header/header.component';
import { HeaderLinksService } from './header/header-links.service';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ContactsUsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    WhatWeDoComponent,
    TestimonialsComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent
  ],

  providers: [HeaderLinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
