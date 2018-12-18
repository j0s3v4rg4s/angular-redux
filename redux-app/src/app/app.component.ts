import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;

  constructor() {
    this.contador = 10;
  }

  title = 'redux-app';

  incrementar() {
    this.contador ++;
  }

  decrementar() {
    this.contador --;
  }
}
