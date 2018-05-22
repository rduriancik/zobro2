import { combineReducers } from 'redux';
import { actions } from '../actions/index'

const initialAuthState = {
  cameraReady: true,
  readerLevel: 'adult',
  tabName: 'Text',
  notifications: {},
  selectedAnimal: undefined,
  isDownloading: false
};

function configuration(state = initialAuthState, action) {
  switch (action.type) {
    case actions.SET_READER_LEVEL:
      return {
        ...state,
        readerLevel: action.level
      }
    case actions.SET_CAMERA_READY:
      return {
        ...state,
        cameraReady: action.ready
      }
    case actions.SET_ANIMAL_TAB:
      return {
        ...state,
        tabName: action.tabName
      }
    case actions.SET_ANIMAL:
      return {
        ...state,
        selectedAnimal: action.animalName
      }
    case actions.ADD_NOTIFICATION:
      {
        let newNotifications = Object.assign({}, state.notifications);
        // store deltaTime so we can highlight right button
        newNotifications[action.eventID] = action.delta;
        return {
          ...state,
          notifications: newNotifications
        }
      }
    case actions.REMOVE_NOTIFICATION:
      {
        let newNotifications = Object.assign({}, state.notifications);
        newNotifications[action.eventID] = 0;
        return {
          ...state,
          notifications: newNotifications
        }
      }
    case actions.SET_IS_DOWNLOADING:
      return {
        ...state,
        isDownloading: action.isDownloading
      }
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  configuration,
});

export default AppReducer;
