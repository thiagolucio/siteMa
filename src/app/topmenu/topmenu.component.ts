import { Component, OnInit } from '@angular/core';
import { TopmenuService } from './topmenu.service';


declare var $;

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})

export class TopmenuComponent implements OnInit {

  constructor(private service: TopmenuService) { }

  ngOnInit() {          
      $('[data-toggle="tooltip"]').tooltip();
  }

}
