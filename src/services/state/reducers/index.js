import { combineReducers } from 'redux-immutable';
import sessionReducer from './session';


const rootReducer = combineReducers({
  session: sessionReducer
});

export { sessionReducer };
export default rootReducer;
