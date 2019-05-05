import { Component, OnInit } from '@angular/core';
import { Http, Response, JsonpModule } from "@angular/http";
import { Observable } from 'rxjs';
import { VideosService } from './videos.service';
import {Videos} from './videos';

declare var $;

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  // videos: Videos[]; 
  videos$: Observable<Videos[]>;

 constructor(private service: VideosService) { }

  ngOnInit() {    
    
    // this.service.list().subscribe(dados => this.videos = dados);    
    this.videos$ = this.service.list();
   
  }

}
