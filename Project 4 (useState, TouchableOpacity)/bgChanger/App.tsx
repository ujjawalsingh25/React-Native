
import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';



function App(): React.JSX.Element {
  const [bgColor, setBgColor] = useState("#212121") 
 
  const generateColor = () => {
    const hexRange = "1234567890ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }

    setBgColor(color)
  }


  return (
    <>
    <Text>BackGround Changer</Text>
    <StatusBar backgroundColor={bgColor}/>
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnText}>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor:"#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnText: {
    fontSize: 25,
    color: "#FFFFFF",
    textTransform: 'uppercase',
  }
});

export default App;
