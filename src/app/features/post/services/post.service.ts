import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post.interfaces';
import { PostDto } from '../dto/post.dto';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlBase = `https://jsonplaceholder.typicode.com/posts`

  constructor(private http: HttpClient) { }


  getPosts(){
    return this.http.get<Post[]>(`${this.urlBase}?_start=0&_limit=10`)
  }

  update(post:Post){
    const updatePost = new PostDto(post.title,post.body);
    updatePost.userId = post.userId
    return this.http.put<Post>(`${this.urlBase}/${post.id}`,updatePost)
  }

  removeById(id:number){
    return this.http.delete(`${this.urlBase}/${id}`);
  }

  addPost(title:string, body:string){
    const newPost = new PostDto(title,body);
    return this.http.post<Post>(this.urlBase,newPost)
  }
}
