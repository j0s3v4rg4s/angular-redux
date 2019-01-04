import { Action } from '@ngrx/store';

export const INCREMENTAR = '[Contador] incrementar';
export const DECREMENT = '[Contador] decrementar';
export const MULTIPLICAR = '[Contador] multiplicar';
export const DIVIDIR = '[Contador] dividir';

export class IncrementarAction implements Action {
  readonly type = INCREMENTAR;
}

export class Decrement implements Action {
  readonly type = DECREMENT;
}

export class MultiplicarActions implements Action {
  readonly type = MULTIPLICAR;

  constructor(public readonly payload: number) {}
}

export class DividirActions implements Action {
  readonly type = DIVIDIR;

  constructor(public readonly payload: number) {}
}


export type actions = IncrementarAction | Decrement | MultiplicarActions | DividirActions;
