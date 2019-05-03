import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {take} from 'rxjs/operators';

export interface PostData {
  body: string;
  color: string;
  email: string;
  id: number;
  postId: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private http: HttpClient) { }

  getPosts() {
    return this.http.get<PostData>('http://www.mocky.io/v2/5cc80d16300000670b055ed5');

  }
}
