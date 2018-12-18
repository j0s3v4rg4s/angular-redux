import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  @Input()
  contador: number;

  constructor() {}

  ngOnInit() {}

  multiplicar() {
    this.contador *= 2;
  }

  dividir() {
    this.contador /= 2;
  }
}
