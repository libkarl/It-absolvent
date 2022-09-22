import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { todoReducer } from './choseFromReduxState'
export const localStorageMemoryKey = 'tasks'

function saveToLocalStorage(state: RootState) {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('persistantState', serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState')
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}
const rootReducers = combineReducers({ todo: todoReducer })
export const store = createStore(rootReducers, loadFromLocalStorage())
// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
