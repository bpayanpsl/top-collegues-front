import { Component, OnInit, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
  
})
export class AvisComponent implements OnInit, OnChanges {

  @Output() avis: EventEmitter<Avis> = new EventEmitter<Avis>();
  @Input() score: number;
  @Input() btnLikeActif = true;
  @Input() btnUnLikeActif = true;

  constructor() { }

  ngOnChanges() {
    
  }

  ngOnInit() {
    
  }

  like() {
    this.avis.emit(Avis.AIMER);
  }

  unlike() {
    this.avis.emit(Avis.DéTESTER);
  }
    
}
