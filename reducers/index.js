import { combineReducers } from 'redux';

const initialAuthState = {
  readerLevel: 'adult',
};

function configuration(state = initialAuthState, action) {
  switch (action.type) {
    case 'SET_READER_LEVEL':
      return {
        ...state,
        readerLevel: action.level
      }
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  configuration,
});

export default AppReducer;
