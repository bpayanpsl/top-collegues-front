import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css'],
  template : `<p>
  <div class="btn-group btn-group-toggle">
    <label class="btn-primary" ngbButtonLabel>
      <input type="checkbox" ngbButton [(ngModel)]="model.left"> Left (pre-checked)
    </label>
    <label class="btn-primary" ngbButtonLabel>
      <input type="checkbox" ngbButton [(ngModel)]="model.middle"> Middle
    </label>
    <label class="btn-primary" ngbButtonLabel>
      <input type="checkbox" ngbButton [(ngModel)]="model.right"> Right
    </label>
  </div>
  <hr>
  <pre>{{model | json}}</pre>
</p>`
})
export class AvisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
