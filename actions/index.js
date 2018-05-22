/*
* action constants
*/

// export const SET_READER_LEVEL = 'SET_READER_LEVEL';
// export const SET_CAMERA_READY = 'SET_CAMERA_READY';
// export const SET_ANIMAL_TAB = 'SET_ANIMAL_TAB';
// export const SET_ANIMAL = 'SET_ANIMAL';
// export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
// export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
// export const SET_IS_DOWNLOADING = 'SET_IS_DOWNLOADING';
export const actions = {
  SET_READER_LEVEL: 'SET_READER_LEVEL',
  SET_CAMERA_READY: 'SET_CAMERA_READY',
  SET_ANIMAL_TAB: 'SET_ANIMAL_TAB',
  SET_ANIMAL: 'SET_ANIMAL',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  SET_IS_DOWNLOADING: 'SET_IS_DOWNLOADING'
}

/*
* action creators
*/

export function setReaderLevel(level) {
  return {
    type: actions.SET_READER_LEVEL,
    level
  }
}

export function setCameraReady(ready) {
  return {
    type: actions.SET_CAMERA_READY,
    ready
  }
}

export function setAnimalTab(tabName) {
  return {
    type: actions.SET_ANIMAL_TAB,
    tabName
  }
}

export function setSelectedAnimal(animalName) {
  return {
    type: actions.SET_ANIMAL,
    animalName
  }
}

export function addNotification(event, delta) {
  return {
    type: actions.ADD_NOTIFICATION,
    eventID: event.id,
    delta: delta,
  }
}

export function removeNotification(event, delta) {
  return {
    type: actions.REMOVE_NOTIFICATION,
    eventID: event.id,
    delta: delta,
  }
}

export function setIsDownloading(isDownloading) {
  return {
    type: actions.SET_IS_DOWNLOADING,
    isDownloading
  }
}
