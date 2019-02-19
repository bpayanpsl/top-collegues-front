import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})
export class ListeColleguesComponentComponent {

  @Input() collegue: Collegue[];
  constructor() {
    this.collegue = [
      { pseudo: 'Benny', score: 0, photoURL: 'https://banner2.kisspng.com/20180715/xyf/kisspng-pepe-the-frog-sticker-t-shirt-paper-sad-frog-meme-5b4bdae1648bd9.7669558115316978894119.jpg' },
      { pseudo: 'Bonny', score: 1, photoURL: '../../../assets/img/aaa.jpg' },
      { pseudo: 'Banny', score: 2, photoURL: '../../../assets/img/bbb.gif' },
      { pseudo: 'Banny', score: 2, photoURL: '../../../assets/img/bbb.gif' },
      { pseudo: 'Banny', score: 2, photoURL: '../../../assets/img/bbb.gif' }
    ];
  }
}






