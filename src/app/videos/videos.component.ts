import { Component, OnInit } from '@angular/core';
import { Http, Response, JsonpModule } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';
import { VideosService } from './videos.service';
import {Videos} from './videos';
import { stringify } from 'querystring';

declare var $;

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: Videos[]; 


 constructor(private service: VideosService) {   

 }

  ngOnInit() {    
    
    this.service.list().subscribe(dados => this.videos = dados);    
   
  }

}
