
import { StyleSheet, Text, View, Image, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
// navigationBar in the bottom
import BottomNav from '../components/BottomNav'
// theme 
import { primaryColor, secondaryColor, backgroundColor1 } from '../styles/Theme1'
// icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Player = ({navigation}) => {

  const [isPlaying, setIsPlaying] = useState(false)
  const [isRotate, setIsRotate] = useState(false) 
  const [lightTheme, setLightTheme] = useState(false) 

  const tempImg = 'https://c.saavncdn.com/049/Sleepy-Anime-Lofi-Vol-2-Unknown-2023-20231104021007-500x500.jpg'

// _________________  Animation (Rotation)  __________________________________ 
  let rotateValueHolder = new Animated.Value(0);
  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false
    }).start(() => startImageRotateFunction());
  }

  useEffect(() => {
    if(isRotate == true){
      startImageRotateFunction();
    }
    else {
      rotateValueHolder.setValue(0);
      rotateValueHolder.stopAnimation()
    }
  }, [isRotate])

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })
//______________________________________________________________________________

  return (
    <>
    <View style={styles.spaceNav}></View>
    <View style={[styles.container, lightTheme ? styles.lightBg : styles.darkBg]}>  
      <Text style={styles.headingText}>myyPlaYer</Text>
      <View style={styles.bottonNav}>
        <BottomNav activepage={'player'} navigation={navigation}/>
      </View>

      {/* ------------   Image Animation (for Rotation) ----------------- */}    
      {isRotate == false 
            ? <Image 
                source={{uri: tempImg}}
                style={styles.imgFix}  
              />
            : <Animated.Image 
                source={{uri: tempImg}}
                style={[styles.imgRotate, {transform: [{rotate: RotateData}] } ]}
              />
        }
        {/* ---------------------------------------------------------------------------- */}

{/* _________________________  Music PlaYer time Manage  _____________________________ */}
      <View style={styles.container2}>
        <Text style={styles.text1}>Song</Text>
        <Text style={styles.text2}>Details</Text>
      </View>

      <View style={styles.container3}>
          <View style={styles.musiccompletedout}>
              <View style={styles.musiccompletedin}></View>
          </View>
          <View style={styles.timecont}>
              <Text style={styles.time}>00:00</Text>
              <Text style={styles.time}>01:00</Text>
          </View>
      </View>
{/* _____________________________________________________________________________________________ */}

{/* _________________________  Play/Pause && Next/Previous Button  _____________________________ */}
      <View style={styles.container4}>
        <AntDesign name="stepbackward" size={35} color="black" style={styles.icon} />
        {isPlaying == false 
            ? <FontAwesome5 name="play" size={40} color="black" style={styles.icon} 
                  onPress={() => setIsPlaying(true)} />
            : <AntDesign name="pausecircle" size={40} color="black" style={styles.icon} 
                  onPress={() => setIsPlaying(false)} /> 
        }
        <AntDesign name="stepforward" size={35} color="black" style={styles.icon} />
      </View>
{/* _____________________________________________________________________________________________ */}

{/* ___________________  Light/Dark Theme && Image Rotation Button  ______________________ */}
      <View style={styles.container5}>
        <View style={styles.bgTheme}>
          {lightTheme == false 
              ? <>
                  <Entypo name="light-up" size={30} color="black" style={styles.rotateImg}
                      onPress={() => setLightTheme(true)} />
                  <Text style={styles.textt}>Light Theme</Text>
                </> 
              : <>
                  <MaterialIcons name="dark-mode" size={30} color="black" style={styles.rotateImg}
                      onPress={() => setLightTheme(false)} />
                  <Text style={styles.textt}>Dark Theme</Text>
                </> 
          }
        </View>
        <View style={styles.containerRotation}>
          {isRotate == false 
              ? <>
                  <FontAwesome6 name="arrows-rotate" size={30} color="black" style={styles.rotateImg}
                      onPress={() => setIsRotate(true)} />
                  <Text style={styles.textt}>Rotate Image</Text>
                </>
              : <>
                  <Ionicons name="stop-circle" size={30} color="black" style={styles.rotateImg}
                      onPress={() => setIsRotate(false)} />
                  <Text style={styles.textt}>Stop Rotate</Text>
                </> 
          }
        </View>  
      </View>  
{/* ______________________________________________________________________________________________ */}
    </View>  
    </> 
  )
}

const styles = StyleSheet.create({
  headingText: {
    color: '#c9c9c9',
    padding: 5,
    marginTop: 12,
    paddingHorizontal: 15,
    fontSize: 28,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#515151',
    borderRadius: 15,
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120%',
    width: '100%',
  },
  lightBg: {
    backgroundColor: '#fff',
  },
  darkBg: {
    backgroundColor: '#212121',
  },
  spaceNav: {
    padding: 12,
    height: 10,
  },
  bottonNav: {
    position: 'absolute',
    // bottom: 8,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  imgFix:{
    width: 300,
    height: 300,
    borderRadius: 30,
    // borderRadius: 150,
    marginVertical: 20,
    borderWidth: 5,
    borderColor: '#515151',
  },
  imgRotate: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginVertical: 20,
    borderWidth: 5,
    borderColor: '#515151',
  },
  text1:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#c9c9c9',
    width: 70,
    alignItems: 'center',
    alignSelf: 'center',
  },
  text2:{
    fontSize: 20,
    color: secondaryColor,
    width: 70,
    alignItems: 'center',
    alignSelf: 'center',
  },
  container3: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
},
  time: {
      fontSize: 15,
      color: secondaryColor,
  },
  musiccompletedout: {
      width: '100%',
      height: 7,
      backgroundColor: secondaryColor,
      borderRadius: 5,
  },
  musiccompletedin: {
      width: '70%',
      height: 5,
      backgroundColor: '#c9c9c9',
  },
  timecont: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginVertical: 6,
  },
  icon: {
    color: '#c9c9c9',
  },
  rotateImg: {
    color: '#c9c9c9',
    padding: 12,
    borderWidth: 2,
    borderColor: '#414141',
    borderRadius: 50,
  },
  container4: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    // borderWidth: 2,
    // borderColor: 'red', 
    // borderStyle: 'solid', 
  },
  container5: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: '10%',
    marginBottom: '12%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 2,
    // borderColor: 'yellow',
    // borderRadius: 50,
  },
  containerRotation: {
    marginLeft: 'auto',
    paddingRight: '10%',
  },
  bgTheme: {},
  textt: {
    color: '#8e8e8e',
    fontWeight: 'bold',
  }
})

export default Player