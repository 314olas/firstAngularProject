import { Component, OnInit } from '@angular/core';
import { PostsService, PostData } from '../posts.service';

@Component({
  selector: 'app-contact-us-posts',
  templateUrl: './contact-us-posts.component.html',
  styleUrls: ['./contact-us-posts.component.scss'],
  providers: [ PostsService ]
})
export class ContactUsPostsComponent implements OnInit {
  posts = undefined;
  httpRequestForPosts = this.postsService.getPosts();

  constructor( private postsService: PostsService ) {  }

  ngOnInit() {
    this.httpRequestForPosts.subscribe((data: PostData) => this.posts = data);
  }

}
