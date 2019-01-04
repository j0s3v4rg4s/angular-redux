import { INCREMENTAR, DECREMENT, actions, MULTIPLICAR, DIVIDIR } from 'src/app/contador/contador.actions';

export function contadorReducer(state: number = 10, action: actions) {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case MULTIPLICAR:
      return state * action.payload;
    case DIVIDIR:
      return state / action.payload;
    default:
      return state;
  }
}
