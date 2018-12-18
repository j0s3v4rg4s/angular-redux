import { Store, createStore } from 'redux'
import { contadorReducer } from './contador/contador.reducer'
import { increaseAction } from './contador/contador.actions'
const store: Store = createStore(contadorReducer)
store.subscribe(()=> {
    console.log(store.getState());
})
store.dispatch(increaseAction)

