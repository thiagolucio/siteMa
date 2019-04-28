import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})



export class SearchComponent implements OnInit {

  ngOnInit() { }


    constructor() {

      $(document).ready(function(){
        $("#inputSearchComponent").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#resultadoSearchComponent *").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });


  }

}