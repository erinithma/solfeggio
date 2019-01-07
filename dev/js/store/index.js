import { createStore, applyMiddleware, compose } from 'redux'
import createRootReducer from '../reducer'
import thunk from 'redux-thunk'
import middleware from '../middleware';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import history from '../history'
/*
const enhancer = compose(
  applyMiddleware(thunk, routerMiddleware(history), middleware)
)

const store = createStore(connectRouter(history)(reducer), enhancer)
*/

const store = createStore(
  createRootReducer(history), 
  compose( applyMiddleware(thunk, routerMiddleware(history), middleware) )
);

export default store
