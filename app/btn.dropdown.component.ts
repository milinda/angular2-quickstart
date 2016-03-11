import {Component} from 'angular2/core';

@Component({
    selector: 'btn-dropdown',
    template: `
    <div class="btn-group">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{value}} <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li *ngFor="#v of values" (click)="clicked(v)"><a href="#">{{v}}</a></li>
      </ul>
    </div>
    `
})


export class BtnDropdownComponent {
    public value: string = VALUES[0];
    public values: string[] = VALUES

    clicked(v: string) {
        this.value = v;
    }
}

var VALUES: string[] = ["Case Sensitive", "Case Insensitive"];
