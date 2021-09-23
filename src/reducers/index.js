import { combineReducers } from 'redux';
import accountReducer from './account';
import videoReducer from './videoCall';

const rootReducer = combineReducers({
  account: accountReducer,
  video: videoReducer,
})

export default rootReducer;