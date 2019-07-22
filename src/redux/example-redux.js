// this file contains all parts of redux in single file
// this is not the correct way to do things in large application

import { combineReducers, createStore } from 'redux';

// actions.js
export const enterIntoMatrix = text => ({
  type: 'ACTIVATE_MATRIX',
  text,
});

export const exit = () => ({
  type: 'EXIT_MATRIX',
});

// reducers.js
export const matrix = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_MATRIX':
      return action.text;
    case 'EXIT_MATRIX':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
    matrix,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
