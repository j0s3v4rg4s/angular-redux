import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IncrementarAction,
  Decrement
} from 'src/app/contador/contador.actions';

export interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(state => this.contador = state);
  }

  title = 'redux-app';

  incrementar() {
    this.store.dispatch(new IncrementarAction());
  }

  decrementar() {
    this.store.dispatch(new Decrement());
  }
}
