import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { AccueilComponentComponent } from './accueil-component/accueil-component.component';
import { ScorePipe } from './pipes/score.pipe';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { HttpClientModule } from '@angular/common/http';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { FormsModule }   from '@angular/forms';
import { ROUTES } from './app.routes'
import { RouterModule } from '@angular/router';
import { MenuComponentComponent } from './menu-component/menu-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponentComponent,
    AccueilComponentComponent,
    ScorePipe,
    HistoriqueVotesComponent,
    NouveauCollegueTemplateFormComponent,
    MenuComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





