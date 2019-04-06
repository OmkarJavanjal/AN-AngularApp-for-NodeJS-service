import { Component, OnInit } from '@angular/core';
import { GetPostsService } from './services/get-posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularIntegrationWithNodeJS';
  public postData;
  constructor(private getPostsService: GetPostsService){}

  ngOnInit() {
    this.getPostsService.getPosts().subscribe(val =>{
      this.postData = val;
      console.log('Result :' + JSON.stringify(val));
    });
  }
}
