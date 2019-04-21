import { Component, OnInit } from '@angular/core';
import { Http, Response, JsonpModule } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';
import { SlidesService } from './slides.service';
import { Slides } from './slides';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  slide: Slides[];  

  constructor(private service: SlidesService) {  }

  ngOnInit() {

    this.service.list().subscribe(dados => this.slide = dados);  
   
  }
}
