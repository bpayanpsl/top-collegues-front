import { Component } from '@angular/core';
import {Collegue} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'top-collegues-front';
  unCollegueExemple: Collegue = {
    photoURL: "../../../assets/img/portrait.jpg/",
    score: 0,
    pseudo: "Benny"
  };
}
