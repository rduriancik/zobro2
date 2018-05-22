import RNFetchBlob from 'react-native-fetch-blob';
import {  PermissionsAndroid, NetInfo } from 'react-native';

export const errors = {
  UNKNOWN_ERROR: 0,
  PERMISSION_DENIED: 1,
  STORIES_DIR_ERROR: 2,
  DOWNLOAD_FAILED_ERROR: 3,
  NO_CONNECTION_ERROR: 4,
}

export async function hasStoryAndroid(storyName) {
  let storyExists = await RNFetchBlob.fs.exists(getStoryPathAndroid(storyName));
  return storyExists;
}

export async function downloadStoryAndroid(storyName) {
  let connectionInfo = await NetInfo.getConnectionInfo();
  if(connectionInfo.type !== 'wifi' && connectionInfo.type !== 'cellular') {
    throw errors.NO_CONNECTION_ERROR;
  }

  let permissionGranted = await checkWritePermissionAndroid();
  if(!permissionGranted) {
    throw errors.PERMISSION_DENIED;
  }

  let storiesDir = getStoriesDirAndroid();
  let storiesDirExists = await RNFetchBlob.fs.isDir(storiesDir);
  if(!storiesDirExists){
    try {
      await RNFetchBlob.fs.mkdir(storiesDir);
    } catch (e) {
      console.log(e);
      throw errors.STORIES_DIR_ERROR;
    }
  }

  try {
    let downloadResult = await RNFetchBlob
    .config({
      path: storiesDir + "/" + storyName + ".mp3",
      addAndroidDownloads: {
        useDownloadManager: true,
        title: "Zoo Brno zvířecí příběh",
        description: "Stahuji příběh " + storyName,
        path: storiesDir + "/" + storyName + ".mp3", // TODO format
        notification: true
      }
    })
    .fetch('GET', 'https://dl.last.fm/static/1526979232/113602306/03ead942a9c3d7d0411677606ee9266003eb0cee0f12ad86bf4317abf23de63f/Sleepmakeswaves+-+It%27s+Dark%2C+It%27s+Cold%2C+It%27s+Winter.mp3'); // TODO URL
    return downloadResult.path();
  } catch(e) {
    console.log(e);
    throw errors.DOWNLOAD_FAILED_ERROR;
  }
}

export function getStoryPathAndroid(storyName) {
  return getStoriesDirAndroid() + "/" + storyName + ".mp3"; // TODO format
}

function getStoriesDirAndroid() {
  let dir = RNFetchBlob.fs.dirs.SDCardApplicationDir;
  if(dir === undefined) {
    console.log("Use internal storage");
    dir = RNFetchBlob.fs.dirs.DocumentDir;
  }

  return dir + "/animalStories";
}

async function checkWritePermissionAndroid() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        'title': 'Zoo Brno',
        'message': 'Pro uložení příběhu do paměti je třeba povolit zápis do zařízení.'
      }
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Permission granted");
      return true;
    } else {
      console.log("Permission denied");
      return false;
    }
  } catch (err) {
    console.warn(err);
    throw errors.UNKNOWN_ERROR;
  }
}