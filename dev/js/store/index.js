import { createStore, applyMiddleware, compose } from 'redux'
import createRootReducer from '../reducer'
import thunk from 'redux-thunk'
import middleware from '../middleware';
import { routerMiddleware } from 'connected-react-router'
import history from '../history'
import $ from 'jquery';
import { getSize } from '../common/helpers';
import a from '../const';

const store = createStore(
  createRootReducer(history), 
  compose( applyMiddleware(thunk, routerMiddleware(history), middleware) )
);

function onResize(){
  store.dispatch({type: a.SET_SIZE, payload: {size: getSize()}})
}

$(window).on("load resize", onResize);

export default store;
