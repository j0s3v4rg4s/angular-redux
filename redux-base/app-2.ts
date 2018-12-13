import { Action } from './ngrx-fake/ngrx'
import { increaseAction, resetActions } from './contador/contador.actions'

function reducer(state = 10, actions: Action) {
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

console.log(reducer(10, increaseAction))
console.log(reducer(10, resetActions))
