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
      { pseudo: 'Benny', score: 0, photoURL: 'https://vignette.wikia.nocookie.net/soniczonenet/images/0/05/Spooderman_original.png/revision/latest?cb=20130808223919' },
      { pseudo: 'Bonny', score: 1, photoURL: 'https://i.ytimg.com/vi/toiwRrC4yEM/maxresdefault.jpg' },
      { pseudo: 'Banny', score: 2, photoURL: 'https://i.kym-cdn.com/photos/images/newsfeed/001/337/786/426.png' },
      { pseudo: 'Banny', score: 2, photoURL: 'https://i.kym-cdn.com/photos/images/facebook/001/255/479/85b.png' },
      { pseudo: 'Banny', score: 2, photoURL: 'https://i.kym-cdn.com/photos/images/original/001/087/822/466.png' }
    ];
   }

  ngOnInit() {
  }

}
