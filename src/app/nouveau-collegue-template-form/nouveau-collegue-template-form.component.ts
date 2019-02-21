import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { PostCollegue} from '../models'
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  idDisabled = true;

  postCollegue :  PostCollegue = {} ;

  message = '';

  constructor(private _data: DataService) { }

  ngOnInit() {
  }

  submit() {
    this._data.creerCollegue(this.postCollegue).subscribe(
      value => { this.message = 'ok bien enregistré'},
      error => { this.message = 'oops pas bien enregistré'}
    );
  }

}
