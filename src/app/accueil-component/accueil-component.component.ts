import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Vote } from '../models'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {

  page = 1;
  pageSize = 3;

   collegue: Collegue[];
    
  constructor(public _data:DataService) {
    this.collegue = _data.lister();
   }

  ngOnInit() {
  }


}
