import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  constructor(private service:PostService) { }

  onAddPost(form: NgForm){

    this.service.addMovie(form.value.title, form.value.content).subscribe();

    console.log(form.value);
    form.resetForm();
  }

  ngOnInit() {
  }

}
