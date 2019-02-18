import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models'

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {

  
    @Input() collegue: Collegue[];
  constructor() {
    this.collegue = [
      { pseudo: 'Benny', score: 0, photoURL: '../../../assets/img/portrait.jpg' },
      { pseudo: 'Bonny', score: 1, photoURL: '../../../assets/img/aaa.jpg' },
      { pseudo: 'Banny', score: 2, photoURL: '../../../assets/img/bbb.gif' },
      { pseudo: 'Banny', score: 2, photoURL: '../../../assets/img/bbb.gif' },
      { pseudo: 'Banny', score: 2, photoURL: '../../../assets/img/bbb.gif' }
    ];
   }

  ngOnInit() {
  }

}
