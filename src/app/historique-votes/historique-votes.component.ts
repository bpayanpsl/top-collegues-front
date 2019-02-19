import { Component, OnInit,Input } from '@angular/core';
import { Vote } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {
  
  listeVote : Vote[];

  constructor(public _data:DataService) {
    
   }

  ngOnInit() {
    this.listeVote = this._data.listerVotes();
  }

  deleteElement(index:number){
    this.listeVote.splice(index, 1);
  }

}
