import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.component';
import { MultiplicarActions, DividirActions } from 'src/app/contador/contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('contador').subscribe(cont => (this.contador = cont));
  }

  multiplicar() {
    this.store.dispatch(new MultiplicarActions(2));
  }

  dividir() {
    this.store.dispatch(new DividirActions(1234123412));
  }
}
