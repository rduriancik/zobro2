export function setReaderLevel(level) {
  return {
    type: 'SET_READER_LEVEL',
    level
  }
}

export function setCameraReady(ready) {
  return {
    type: 'SET_CAMERA_READY',
    ready
  }
}

export function setAnimalTab(tabName) {
  return {
    type: 'SET_ANIMAL_TAB',
    tabName
  }
}

export function setSelectedAnimal(animalName) {
  return {
    type: 'SET_ANIMAL',
    animalName
  }
}

export function addNotification(event, delta) {
  return {
    type: 'ADD_NOTIFICATION',
    eventID: event.id,
    delta: delta,
  }
}

export function removeNotification(event, delta) {
  return {
    type: 'REMOVE_NOTIFICATION',
    eventID: event.id,
    delta: delta,
  }
}
