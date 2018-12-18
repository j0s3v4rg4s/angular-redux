import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  @Input()
  contador: number;

  constructor() {}

  ngOnInit() {}

  reset() {
    this.contador = 0;
  }
}
