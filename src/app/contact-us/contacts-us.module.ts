import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactsUsLinksComponent } from './contacts-us-links/contacts-us-links.component';
import { ContactsUsMainContentComponent } from './contacts-us-main-content/contacts-us-main-content.component';
import { PostsService } from './posts.service';
import {ContactPostRequestService} from './contact-post-request.service';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsPostsComponent } from './contact-us-posts/contact-us-posts.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { PostComponent } from './post/post.component';
import {ContactUsComponent} from './contact-us.component';


@NgModule({
  declarations: [
    ContactsUsLinksComponent,
    ContactsUsMainContentComponent,
    ContactUsPostsComponent,
    ContactUsFormComponent,
    PostComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ PostsService, ContactPostRequestService ]
})
export class ContactsUsModule { }
