import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {PostService} from '../services/post.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  post: any = [];
  mTitle: String;
  mContent: String;

  constructor(private router:Router, private route: ActivatedRoute, private service:PostService) { }

  ngOnInit() {

    console.log(this.route.snapshot.params['id']);
    this.service.getMovie(this.route.snapshot.params['id']).subscribe(data =>
      {
        this.post = data;
        console.log(this.post);
        this.mTitle = this.post.title;
        console.log("message " + this.mTitle);

      });
  }//end of ngoninit

  onEditPost(form: NgForm){
    this.service.updatemovie(this.post._id, form.value.title, form.value.content).subscribe(() =>
    {
      this.router.navigate(['/list']);
    })
  }

}
