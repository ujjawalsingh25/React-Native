
// ____________  React Native Navigation   _________________________
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm install @react-navigation/stack

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string}
};

const Stack = createNativeStackNavigator<RootStackParamList>()  // type checkint or type testing

function App(): React.JSX.Element {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: "Trending Products"        // title says you moved to this screen
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title: "Product Details"
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
