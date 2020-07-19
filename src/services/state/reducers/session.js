import { fromJS } from 'immutable';
import { sessionTypes as types } from '../types';

const initialState = fromJS({
  user: null
});

function sessionReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_USER: {
      return state.set('user', fromJS(action.user));
    }
    default:
      return state;
  }
}

export default sessionReducer;
