import { Injectable } from '@angular/core';
import { Collegue, Avis } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // TODO alimenter la liste de collègues
  listeCollegues: Collegue[] = []

  constructor() { }

  lister(): Collegue[] {
    return this.listeCollegues = [
      { pseudo: 'Benny', score: 0, photoURL: '../../../assets/img/portrait.jpg' },
      { pseudo: 'Bonny', score: 1, photoURL: '../../../assets/img/aaa.jpg' },
      { pseudo: 'Banny', score: 2, photoURL: '../../../assets/img/bbb.gif' },
      { pseudo: 'Banny', score: 2, photoURL: '../../../assets/img/bbb.gif' },
      { pseudo: 'Banny', score: 2, photoURL: '../../../assets/img/bbb.gif' }
    ];
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Collegue {
    if (avis == Avis.AIMER) {
      collegue.score++;
    } else if (avis == Avis.DéTESTER) {
      collegue.score--;
    }
    return collegue;
  }

}

