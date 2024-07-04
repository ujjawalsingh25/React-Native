import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
// import Navigatiom
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Screens
import Player from './src/screens/Player';
import AllMusic from './src/screens/AllMusic';
import AllPlaylists from './src/screens/AllPlaylists';
import Account from './src/screens/Account';
// imported Media Library
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("InApp");

  const [allSongs, setAllSongs] = useState([]);

  const permissionPopUP = async () => {
    console.log("In PermissionPopUp");

    Alert.alert(
      "Permission Required",
      "myyPlaYer requires permission to access media library",
      [
        {
          text: "Accept",
          onPress: async () => {
            console.log("Granted Permission");
            const permission = await MediaLibrary.requestPermissionsAsync();
            if (permission.status === 'granted') {
              getAllSongs();
            }
          },
        },
        { text: "Cancel", onPress: () => {} }, // Do nothing on Cancel
      ]
    );
  };

  const getPermission = async () => {
    try {
      console.log("In getPermission");
      const permission = await MediaLibrary.getPermissionsAsync();
      console.log("Permission: ", permission);

      if (permission.granted) {
        getAllSongs();
        console.log('Permission Granted, Showing all music');
      } else if (permission.canAskAgain) {
        permissionPopUP(); // Request permission if not granted initially
      } else {
        console.log("Can't Show Music (permission denied permanently)");
      }
    } catch (error) {
      console.error("Error fetching initial permissions:", error);
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  const getAllSongs = async () => {
    console.log("In getallSongs");

    const songs = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
    });
    console.log("Songs");
    console.log(typeof(songs));
    console.log(songs);
    setAllSongs(songs.assets);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="allplaylists"
          component={AllPlaylists}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="allmusic" component={AllMusic} options={{ headerShown: false }} />
        <Stack.Screen name="player" component={Player} options={{ headerShown: false }} />
        <Stack.Screen name="account" component={Account} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    fontSize: 30,
  },
});
