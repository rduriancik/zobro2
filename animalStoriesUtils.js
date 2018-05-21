import RNFetchBlob from 'react-native-fetch-blob';
import {  PermissionsAndroid } from 'react-native';

export const UNKNOWN_ERROR = 0;
export const PERMISSION_DENIED = 1;
export const STORIES_DIR_ERROR = 2;
export const DOWNLOAD_FAILED_ERROR = 3;

export async function hasStoryAndroid(storyName) {
  console.log("getAnimalStoryFilePath called");
  let storyExists = await RNFetchBlob.fs.exists(getStoryPathAndroid(storyName));
  return storyExists;
}

export async function downloadStoryAndroid(storyName) {
  let permissionGranted = await checkWritePermissionAndroid();
  if(!permissionGranted) {
    throw PERMISSION_DENIED;
  }

  let storiesDir = getStoriesDirAndroid();
  let storiesDirExists = await RNFetchBlob.fs.isDir(storiesDir);
  if(!storiesDirExists){
    try {
      await RNFetchBlob.fs.mkdir(animalDirPath);
    } catch (e) {
      console.log(e);
      throw STORIES_DIR_ERROR;
    }
  }

  try {
    let downloadResult = await RNFetchBlob
    .config({
      addAndroidDownloads: {
        useDownloadManager: true,
        title: "Zoo Brno zvířecí příběh",
        description: "Stahuji příběh " + storyName,
        path: storiesDir + "/" + storyName + ".", // TODO format
        notification: true
      }
    })
    .fetch('GET', '') // TODO URL

    return downloadResult.path();
  } catch(e) {
    console.log(e);
    throw DOWNLOAD_FAILED_ERROR;
  }
}

export function getStoryPathAndroid(storyName) {
  return getStoriesDirAndroid() + "/" + storyName + "."; // TODO format
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
    throw UNKNOWN_ERROR;
  }
}