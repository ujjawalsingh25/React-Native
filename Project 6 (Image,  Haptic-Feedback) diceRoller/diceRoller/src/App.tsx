
// Video -29 -->> Summary

// npm i react-native-haptic-feedback
// npx $ react-native link react-native-haptic-feedback     
// ________  if Works else manually  _____________
// android -->> app -->> src -->> main -->> java -->>MainApplication.kt
// add import of the file -->> import com.mkuczera.RNReactNativeHapticFeedbackPackage;
// --- The below package add are in documentation but need not to add else gives error as already using ------
// add -->> package.add(new RNReactNativeHapticFeedbackPackage())  -->> in the getPackages()
// return packages
// -----------------------------
// Include both below line in android -->> settings,gradke
// include ':react-native-haptic-feedback'
// project(':react-native-haptic-feedback').projectDir = 
//                        new File(rootProject.projectDir, '../node_modules/react-native-haptic-feedback/android')
// -------------------------------
// Add below to android -->> build.gradle
// implementation project(":react-native-haptic-feedback")
// ___________________________________________________________________________________________________________


import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{      // Declare a type where we pass on Images.
  imageUrl: ImageSourcePropType
}>

// Optional configuration -->> Haptic-Feedback
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): JSX.Element => {     //DiceProps will return the image as a component
  return (
    <View>
      <Image  style={styles.diceImage}
          source={imageUrl}
      />
    </View>
  )
}

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceFive)

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        setDiceImage(DiceFive)
        break;
    }

    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger("impactLight", options); 
          // **** Using impactLight but haptic-feedback conatins many feature
  }

  return (
    <>
    {/* <Text style={styles.rollDiceBtnText}>Roll the Dice</Text> */}
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable                            // Pressable Button
      onPress={rollDiceOnTap}
      >
        <Text
        style={styles.rollDiceBtnText}
        >
        Roll the dice
        </Text>
      </Pressable>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    marginTop: 25,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
