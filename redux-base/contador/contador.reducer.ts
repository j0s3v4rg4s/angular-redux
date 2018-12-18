import { Action } from '../ngrx-fake/ngrx';

export function contadorReducer(state = 10, actions: Action) {
    switch (actions.type) {
        case 'INCREASE':
            return ++state
        case 'DECRECE':
            return --state
        case 'MULTIPLICATE':
            return state * actions.payload
        case 'DIVIDE':
            return state / actions.payload
        case 'RESET':
            return 0
        default:
            return state
    }
}