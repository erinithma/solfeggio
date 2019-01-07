import sound from './sound'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  sound
});

export default createRootReducer;

/*
export default combineReducers({
  sound
})
*/