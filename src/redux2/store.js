// redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import pokemonReducer from './reducers/pokemonReducer';
import uiReducer from './reducers/uiReducer';
import { thunk } from 'redux-thunk';


const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  ui: uiReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
