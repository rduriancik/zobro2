import { combineReducers } from 'redux';

const initialAuthState = {
  cameraReady: true,
  readerLevel: 'adult',
  tabName: 'Text',
  notifications: {},
  selectedAnimal: undefined,
};

function configuration(state = initialAuthState, action) {
  switch (action.type) {
    case 'SET_READER_LEVEL':
      return {
        ...state,
        readerLevel: action.level
      }
    case 'SET_CAMERA_READY':
      return {
        ...state,
        cameraReady: action.ready
      }
    case 'SET_ANIMAL_TAB':
      return {
        ...state,
        tabName: action.tabName
      }
    case 'SET_ANIMAL':
      return {
        ...state,
        selectedAnimal: action.animalName
      }
    case 'ADD_NOTIFICATION':
      {
        let newNotifications = Object.assign({}, state.notifications);
        // store deltaTime so we can highlight right button
        newNotifications[action.eventID] = action.delta;
        return {
          ...state,
          notifications: newNotifications
        }
      }
    case 'REMOVE_NOTIFICATION':
      {
        let newNotifications = Object.assign({}, state.notifications);
        newNotifications[action.eventID] = 0;
        return {
          ...state,
          notifications: newNotifications
        }
      }
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  configuration,
});

export default AppReducer;
