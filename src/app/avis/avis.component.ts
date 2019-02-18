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
  btnLike: any;
  btnUnlike: any;

  constructor() { }

  ngOnChanges() {
    if (this.btnLike === undefined) {
      return;
    }
    this.disableButtons();
  }

  ngOnInit() {
    this.btnLike = <HTMLInputElement>document.getElementById("like");
    this.btnUnlike = <HTMLInputElement>document.getElementById("unlike");
  }

  like() {
    this.avis.emit(Avis.AIMER);
  }

  unlike() {
    this.avis.emit(Avis.DéTESTER);
  }

  disableButtons() {
    console.log(this.score);

    if (this.score >= 10) {
      this.btnLike.disabled = true;
    } else {
      this.btnLike.disabled = false;
    }
    if (this.score <= -10) {
      this.btnUnlike.disabled = true;
    } else {
      this.btnUnlike.disabled = false;
    }
  }
    
}
