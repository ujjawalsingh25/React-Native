
// _________________________________________________________________________________________________________________________
// ActivityIndicator  -->> If not loaded, Circle will keep running -> Buffering                                             |
//                                                                                                                          |
// __________________________   React Native Track Player   ____________________________                                    |
// npm i react-native-track-player   ||  npm install --save react-native-track-player                                       |
// add below register in the index.js  -->> below code -->> AppRegistry.registerComponent(... );                             |
// TrackPlayer.registerPlaybackService(() => require('./service'));                                                         |
//   || TrackPlayer.registerPlaybackService(() => playbackService);  -->> where playbackService created by us.              |
//                                                                                                                          |
// It creates a lot of events i.e                                                                                           |
//    (1)  -->> Set up a player                                                                                             |
//    (2) -->> Put Music on the player                                                                                      |
// (Once player is ready the all process executed                                                                           |
//                  i.e -->> Memory Setup, Player Setup, All Tracks are loaded in the PLayer)                               |
//     (3) -->> then checked if all events are listened like -> Move-Forward, move-Backward, Player Controls.               |
//                                                                                                                          |
// __________________________   React Native Community Slider   ____________________________                                |
// npm i @react-native-community/slider                                                                                     |
//  -->> Gives a slider which also tracks the progress.                                                                     |
//  useProgress (HOOK)  -->> Keep track of progress                                                                         |
// _________________________________________________________________________________________________________________________|

import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {setupPlayer, addTrack} from '../musicPlayerServices'
import MusicPlayer from './screens/MusicPlayer';

function App(): React.JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  async function setup() {
    let isSetup = await setupPlayer()
    if(isSetup)   await addTrack()
    setIsPlayerReady(isSetup)
  }

  useEffect(() => {
    setup();    
  }, [])

  if(!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <>
      <Text style={styles.headingText}>SPOTIFY - MusicPlaYer</Text>
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"}/>
        <MusicPlayer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
    paddingHorizontal: 55
  },
});

export default App;
