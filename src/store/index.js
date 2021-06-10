import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

// redux dev tools
const composeEnhancers = composeWithDevTools({});
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(combineReducers(reducer), enhancer);

export default store