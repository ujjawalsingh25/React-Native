import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BottomNav from '../components/BottomNav'
// icons
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const AllMusic = ({navigation}) => {

  
  const [lightTheme, setLightTheme] = useState(false) 

  return (
    <>
    <View style={styles.spaceNav}></View>
    <View style={[styles.container, lightTheme ? styles.lightBg : styles.darkBg]}>  
        <View style={styles.bgTheme}>
        <Text style={styles.headingText}>All Music</Text>
        {lightTheme == false 
            ? <>
                <Entypo name="light-up" size={30} color="black" style={styles.rotateImg}
                    onPress={() => setLightTheme(true)} />
              </> 
            : <>
                <MaterialIcons name="dark-mode" size={30} color="black" style={styles.rotateImg}
                    onPress={() => setLightTheme(false)} />
              </> 
        }
        </View>

        



      <View style={styles.bottonNav}>
        <BottomNav activepage={'allmusic'} navigation={navigation} />
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  spaceNav: {
    padding: 14,
    height: 10,
  },
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
  bgTheme: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '12%',
  },
  bottonNav: {
    position: 'absolute',
    // bottom: 8,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  rotateImg: {
    color: '#c9c9c9',
    padding: 15,
    width:'30%',
    borderWidth: 2,
    borderColor: '#414141',
    borderRadius: 50,
  },
  textt: {
    color: '#8e8e8e',
    fontWeight: 'bold',
  }
})

export default AllMusic