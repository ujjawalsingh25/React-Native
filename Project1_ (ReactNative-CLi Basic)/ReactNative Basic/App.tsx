// Styles are similar to Web but the Differnce is
// IN Web Styling is done **** LEFT TO RIGHT
// While in React-Native -->> Top TO Bottom
// A POP-UP -->>> "METRO" will run, reload, bundle the android

import React from "react";

import {
  View,
  Text,
  SafeAreaView
} from 'react-native'

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Jai Maa</Text>
        <Text>Om</Text>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;