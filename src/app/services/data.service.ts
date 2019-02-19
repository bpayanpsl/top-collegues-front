import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private listeCollegues: Collegue[] = [
    { pseudo: 'Benny', score: 0, photoURL: '../../../assets/img/portrait.jpg' },
    { pseudo: 'Bonny', score: 1, photoURL: '../../../assets/img/aaa.jpg' },
    { pseudo: 'Banny', score: 2, photoURL: '../../../assets/img/bbb.gif' },
    { pseudo: 'Banny', score: 2, photoURL: '../../../assets/img/bbb.gif' },
    { pseudo: 'Banny', score: 2, photoURL: '../../../assets/img/bbb.gif' }
  ];

  private listeVotes: Vote[] = [
    { collegue: this.listeCollegues[0], avis : Avis.AIMER },
    { collegue: this.listeCollegues[1], avis : Avis.AIMER },
    { collegue: this.listeCollegues[2], avis : Avis.DéTESTER },
    { collegue: this.listeCollegues[3], avis : Avis.AIMER },
    { collegue: this.listeCollegues[4], avis : Avis.DéTESTER },
  ];

  constructor() { }

  lister(): Collegue[] {
    return this.listeCollegues;
  }

  listerVotes(): Vote[] {
    return this.listeVotes;
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Collegue {
    if (avis == Avis.AIMER) {
      collegue.score++;
    } else if (avis == Avis.DéTESTER) {
      collegue.score--;
    }
    this.listeVotes.push({collegue, avis})
    return collegue;
  }

  deleteVote(index: number) {
    this.listeVotes.splice(index, 1);
  }

}

