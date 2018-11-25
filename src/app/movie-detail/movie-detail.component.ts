import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import {Post} from '../post.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  posts: any = [];
  constructor(private ps:PostService) { }

  ngOnInit() {

    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
    })
  }//end of ngOnInit

  onDelete(id:string){
    console.log("Delete called " + id);
    this.ps.deleteMovie(id).subscribe(() =>
    {
      this.ngOnInit();
    })
  }

}
