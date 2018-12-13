// Actions
interface Action<T = any> {
    type: string
    payload?: T
}

const increaseAction: Action = {
    type: 'INCREASE'
}

const decreceAction: Action = {
    type: 'DECRECE'
}

function reducer(state = 10, action: Action) {
    switch (action.type) {
        case 'INCREASE':
            return ++state
        case 'DECRECE':
            return --state
        default:
            return state
    }
}

const newState = reducer(undefined, increaseAction)
const newState2 = reducer(undefined, decreceAction)

console.log(newState)
console.log(newState2)

