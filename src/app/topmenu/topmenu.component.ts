import { Component, OnInit } from '@angular/core';
import { Http, Response, JsonpModule } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';


export type Item = { idSlide: number, tituloSlide: string, descricaoSlide: string, urlSlide: string };

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent implements OnInit {

 	slides: Array<Item>;

  constructor(private http: Http) { }

  ngOnInit() {
      this.http
        .get("/assets/data/slides.json")
        .pipe(map(data => data.json() as Array<Item>))
        .subscribe(data => {
        this.slides = data;
        console.log(data);
      });
  }

}
