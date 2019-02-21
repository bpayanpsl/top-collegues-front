import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote, PostCollegue } from '../models';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private listeCollegues: Collegue[];

  private listeVotes: Vote[] = [
    /*
    { collegue: this.listeCollegues[0], avis : Avis.AIMER },
    { collegue: this.listeCollegues[1], avis : Avis.AIMER },
    { collegue: this.listeCollegues[2], avis : Avis.DéTESTER },
    { collegue: this.listeCollegues[3], avis : Avis.AIMER },
    { collegue: this.listeCollegues[4], avis : Avis.DéTESTER },
    */
  ];

  constructor(private _http: HttpClient) { }

  lister(): Observable<Collegue[]> {
    return this._http.get<Collegue[]>(`${environment.backendUrl}/collegues`);
  }

  listerVotes(): Vote[] {
    return this.listeVotes;
  }

  creerCollegue(postCol:PostCollegue) {
    return this._http.post<PostCollegue>(`${environment.backendUrl}/collegues`, postCol);
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

