//Reducers specify how the application's state changes in response to actions sent to the store.
//NEVER IN A REDUCER DO THE FOLLOWING 
//Mutate its arguments;
//Perform side effects like API calls and routing transitions;
//Call non-pure functions, e.g. Date.now() or Math.random().
// Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.
// https://redux.js.org/basics/reducers

// It's important to note that you'll only have a single store in a Redux application. 
// When you want to split your data handling logic, you'll use reducer composition instead of many stores.

import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp

// function todoApp(state, action) {
//   if (typeof state === 'undefined') {
//     return initialState
//   }

//   // For now, don't handle any actions
//   // and just return the state given to us.
//   return state
// }
//below is the same as above using es6
// function todoApp(state = initialState, action) {
//   // For now, don't handle any actions
//   // and just return the state given to us.
//   return state
// }
