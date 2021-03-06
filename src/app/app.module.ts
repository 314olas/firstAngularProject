import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ContactsUsModule } from './contact-us/contacts-us.module';

import { HeaderComponent } from './header/header.component';
import { HeaderLinksService } from './header/header-links.service';
import { GetLatestWorkService } from './home/get-latest-work.service';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {SendSuccessMessageComponent} from './contact-us/send-success-message/send-success-message.component';
import { LatestWorkComponent } from './latest-work/latest-work.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContactsUsModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    WhatWeDoComponent,
    TestimonialsComponent,
    NotFoundComponent,
    HomeComponent,
    SendSuccessMessageComponent,
    FooterComponent,
    LatestWorkComponent,
    SliderComponent
  ],

  providers: [HeaderLinksService, GetLatestWorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
