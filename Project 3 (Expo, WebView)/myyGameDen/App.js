import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview'  

export default function App() {
  return (
    <View style={styles.container}>
      <WebView 
          source={{ 
            uri: 'https://ujjawalsingh25.github.io/myyGameDen/' 
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '8%',
    backgroundColor: '#212121'
  },
});
