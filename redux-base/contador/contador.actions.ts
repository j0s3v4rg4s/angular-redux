import { Action } from '../ngrx-fake/ngrx';

export const increaseAction: Action = {
    type: 'INCREASE'
}

export const decreceAction: Action = {
    type: 'DECRECE'
}

export const multiplicateAction: Action<number> = {
    type: 'MULTIPLICATE',
    payload: 2
}

export const divideAction: Action<number> = {
    type: 'DIVIDE',
    payload: 2
}

export const resetActions: Action = {
    type: 'RESET'
}

