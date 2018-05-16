import React from 'react';
import styles, { HEADER_STYLE, WIDTH } from '../styles/styles';

import { TabNavigator , StackNavigator } from 'react-navigation';
import Camera from 'react-native-camera';
import { NavigationActions } from 'react-navigation';
import HeaderBackButton from 'react-navigation/src/views/Header/HeaderBackButton';
import { SimplePlayer } from 'react-native-simple-player';
import RNFetchBlob from 'react-native-fetch-blob';

import {
  View,
  ScrollView,
  Image,
  Text,
  Alert,
  TouchableHighlight,
  StyleSheet,
  Switch,
  Platform,
  PermissionsAndroid,
  ToastAndroid
} from 'react-native';
import { scenes, sceneTitles } from '../scenes';
import animals from '../animals';
import AnimalNeighbourScene from '../components/animalNeighbourScene';

class TextTab extends React.Component {
  constructor(props) {
    super(props);

    if(Platform.OS === 'android') {
      this.state = {
        animalStoryPath: null,
      }

      this.onDownloadFileClick = this.onDownloadFileClick.bind(this);
      this.getStoryFilePath = this.getStoryFilePath.bind(this);

      this.getStoryFilePath("");
    }
  }

  static navigationOptions = (navigation) =>
    ({
      title: 'Text',
      tabBarIcon: ({tintColor}) => (
        <Image
            source={require('../images/tab-icons/icon-text.png')}
            style={[styles.tabIcons, {backgroundColor: tintColor}]}
        />
      )
    }) 

    showErrorFileDialog(){
      Alert.alert(
        'Missing audio file',
        'Cannot play the file because it was not provided.',
        [
          {text: 'Cancel', onPress: () => console.log("Missing audio file dialog cancelled")}
        ]
      )
    }

    async onDownloadFileClick() {
      // TODO start downloading file
      // const dirs = RNFetchBlob.fs.dirs;
      // console.log(dirs);

      // TODO write permission

      if(Platform.OS === 'android'){
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              'title': 'Zoo Brno',
              'message': 'We need access to your storage to save the file'
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Permission granted")
          } else {
            console.log("Permission denied")
            return;
          }
        } catch (err) {
          console.warn(err)
        }
      }

      let dir = RNFetchBlob.fs.dirs.SDCardApplicationDir;
      if (dir === undefined) {
        dir = RNFetchBlob.fs.dirs.DocumentDir;
      }

      let animalDirPath = dir + "/animalStories" ;
      let hasAnimalDir = await RNFetchBlob.fs.isDir(animalDirPath); 
      if(!hasAnimalDir) {
        RNFetchBlob.fs.mkdir(animalDirPath)
          .then(() => console.log("animalStories directory created"))
          .catch(() => console.log("Error while creating animalStories directory"));
      }

      ToastAndroid.show("Download starting",  ToastAndroid.LONG);

      RNFetchBlob
        .config({
          path: animalDirPath,
          addAndroidDownloads: {
            useDownloadManager: true,
            title: 'Story',
            description: 'Stoory',
            path: animalDirPath + "/music.mp3",
            notification: true
          }
        })
        .fetch('GET', 'https://dl.last.fm/static/1524575793/131627927/4e99865260eecb87f0d622510b3b99a908964ff867cda0864d3eb260cad02ff0/Death+Grips+-+I%27ve+Seen+Footage.mp3')
        .then((res) => {
          console.log("File saved to ", res.path());
          this.setState({
            animalStoryPath: res.path(),
          });
        })
        .catch((errMsg, statusCode) => ToastAndroid.show(errMsg, ToastAndroid.LONG));
        
    }

    async getStoryFilePath(storyName) {
      console.log("get story file called");
      let dir = RNFetchBlob.fs.dirs.SDCardApplicationDir;
      if (dir === undefined) {
        dir = RNFetchBlob.fs.dirs.DocumentDir;
      }
      console.log("get story dir obtained");
      let animalStoryPath = dir + "/animalStories/music.mp3";

      // RNFetchBlob.fs.ls(animalDirPath)
      // .then((files) => console.log(files));
      
      let hasFile = await RNFetchBlob.fs.exists(animalStoryPath);
      console.log("get story file exists? ");
      console.log(hasFile);
      if(hasFile) {
        this.setState({
          animalStoryPath: animalStoryPath,
        })
      }
    }

  render() {
    let AnimalDetail;
    const animalName = this.props.screenProps.animal;

    if (!(animalName in animals)) {
      return (
        <Text>Neznámý QR kód načten: {animalName}</Text>
      );
    }

    if (this.props.screenProps.readerLevel === "adult") {
      AnimalDetail = animals[animalName].contentAdult;
    } else {
      AnimalDetail = animals[animalName].contentChild;
    }
    
    let player = null;

    if(Platform.OS === 'android') { 
      let playerStyle = {
        backgroundColor: '#3C3C3B', 
        iconColor: '#FFF', 
        iconSize: 50, 
        sliderThumbColor: '#009385', 
        sliderMinTrackColor: '#3CAC54', 
        sliderMaxTrackColor: '#FFFFFF',
        textColor: '#FFF',
      }

      let downloadButtonStyle = {
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#3C3C3B', 
        width: WIDTH,
        height: 50
      }

      let downloadButtonTextStyle = {
        fontWeight: 'bold', 
        fontSize: 20, 
        color: '#FFFFFF', 
        textAlign: 'center', 
        textAlignVertical: 'center'
      }

      player = this.state.animalStoryPath != null ? (
          <SimplePlayer 
            isPlaying={false} 
            style={playerStyle}
            preventLoudMusic={true} 
            filePath={this.state.animalStoryPath}
            onFileNotFound={this.showErrorFileDialog}/>
        ) : (
          <TouchableHighlight style={downloadButtonStyle} onPress={this.onDownloadFileClick}>
            <Text style={downloadButtonTextStyle}>Stáhni příběh</Text>
          </TouchableHighlight>
        )
    }

    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <AnimalDetail animal = {animalName}/>
        </ScrollView> 
        {player}
      </View>
    );
  }
}

class QRTab extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'QR kód',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../images/tab-icons/icon-qr.png')}
        style={[styles.tabIcons, {backgroundColor: tintColor}]}
      />
    )
  }

  onBarCodeRead(barcode) {
    this.props.screenProps.setCameraReady(false);

    // We want to prevent state when camera is reloaded with back-button
    // This scenarios points back-button to main menu what is fine (and work-around)
    // Look at https://stackoverflow.com/questions/44034430/react-navigation-and-component-lifecycle
    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({
          routeName: sceneTitles[scenes.MAIN_MENU].name,
        }),
        NavigationActions.navigate({
          routeName: sceneTitles[scenes.ANIMAL_DETAIL].name,
          params: {animal: barcode.data},
        })
      ]
    });

    this.props.screenProps.setAnimalTab('Text');
    this.props.screenProps.parentNavigation.dispatch(resetAction);
  }

  render() {
    if ((this.props.screenProps.cameraReady) && (this.props.screenProps.animalTab === 'QR')) {
      return (
        <View style={localStyles.container}>
          <Camera
            style={localStyles.preview}
            onBarCodeRead={(barcode) => this.onBarCodeRead(barcode)}
            aspect={Camera.constants.Aspect.fill}>
          </Camera>
        </View>
      );
    } else {
      return (
        <Text>Loading</Text>
      );
    }
  }
}

class NeighbourTab extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Sousedi',
    tabBarIcon: ({tintColor}) => (
      <Image
          source={require('../images/tab-icons/icon-neigh.png')}
          style={[styles.tabIcons, {backgroundColor: tintColor}]}
      />
    )
  }

  render() {
    const animalName = this.props.screenProps.animal;

    if (!(animalName in animals)) {
      return (
        <Text>Neznámý QR kód načten: {animalName}</Text>
      );
    }

    return (
      <AnimalNeighbourScene
        navigation={this.props.screenProps.parentNavigation}
        setAnimalTab={this.props.screenProps.setAnimalTab}
        animal={animalName} />
      );
  }
}

export default class AnimalMainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let animalName;
    let adultImage;
    let childImage;
    let animalURI;

    animalURI = this.props.animal;
    if ((this.props.animal in animals)) {
      animalName = animals[this.props.animal].name;
    } else {
      if (this.props.animal.startsWith("zoo://brno/")) {
        const animalPart = this.props.animal.substring("zoo://brno/".length);
        if (animalPart in animals) {
          animalName = animals[animalPart].name;
          animalURI = animalPart;
        } else {
          animalName = 'Chybný QR kód';
        }
      } else {
        animalName = 'Chybný QR kód';
      }
    }

    if (this.props.readerLevel === 'adult') {
      adultImage = require('../images/tab-icons/adult-active.png');
      childImage = require('../images/tab-icons/child-inactive.png');
    } else {
      adultImage = require('../images/tab-icons/adult-inactive.png');
      childImage = require('../images/tab-icons/child-active.png');
    }

    let tabBarOptions;
    if (Platform.OS === 'ios') {
      tabBarOptions = {
        activeTintColor: 'black',
      }
    } else {
      tabBarOptions = {
        style: {
          backgroundColor: '#0b2611',
        },
        indicatorStyle: {
          backgroundColor: '#3CAC54',
        }
      }
    }

    const MainScreenNavigator = TabNavigator({
      Text: { screen: TextTab },
      QR: { screen: QRTab },
      Neighbour: { screen: NeighbourTab }
    }, {
      initialRouteName: this.props.tabName,
      tabBarOptions,
    });

    const MainStack = StackNavigator({
      Main: {screen: MainScreenNavigator },
    }, {
      navigationOptions: {
        title: animalName,
        ...HEADER_STYLE,
        headerLeft: 
        <HeaderBackButton tintColor='#DEDEDE'  onPress={ () => {
          return this.props.navigation.goBack();
        }}/>,
        headerRight: 
        (
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Image style={{marginRight: -5}} source={childImage} />
            <Switch
              onTintColor = '#3CAC54'
              style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
              value = { this.props.readerLevel === 'adult' }
              onValueChange = { (value) => {
                if (value) {
                  this.props.setReaderLevel('adult');
                } else {
                  this.props.setReaderLevel('child');
                }
              }}
            />
            <Image style={{marginLeft: -5, marginRight: 5}} source={adultImage} />
          </View>
        ),
      }
      }
    );

    const p = {};
    p.animal = animalURI;
    p.readerLevel = this.props.readerLevel;
    p.cameraReady = this.props.cameraReady;
    p.setCameraReady = this.props.setCameraReady;
    p.setReaderLevel = this.props.setReaderLevel;
    p.animalTab = this.props.tabName;
    p.setAnimalTab = this.props.setAnimalTab;
    p.parentNavigation = this.props.navigation;

    return (
      <MainStack
        screenProps={p}
        onNavigationStateChange={(prevState, currentState) => {
          p.setCameraReady(true);
          p.setAnimalTab(currentState.routes[0].routes[currentState.routes[0].index].key);
        }}
      />
    );
  }
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  
});
