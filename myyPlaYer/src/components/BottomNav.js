import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
// icons 
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// styles
import {backgroundColor1, backgroundColor2, myBlack, primaryColor, themecol} from '../styles/Theme1'


const BottomNav = ({activepage}) => {

  const navigation = useNavigation(); 
  
  return (
    <View style={styles.container}> 
      {activepage == 'allplaylists' ? 
        <MaterialCommunityIcons name="playlist-music" size={35} color="black" style={styles.iconActive} /> 
          : <MaterialCommunityIcons name="playlist-music" size={35} color="black" style={styles.icon} 
                onPress={() => navigation.navigate('allplaylists')}/>
      }
      {activepage == 'player' ? 
        <Feather name="music" size={35} color="black" style={styles.iconActive} /> 
          : <Feather name="music" size={35} color="black" style={styles.icon} 
                  onPress={() => navigation.navigate('player')}/>
      }
      {activepage == 'allmusic' ? 
        <Entypo name="folder-music" size={35} color="black" style={styles.iconActive} /> 
          : <Entypo name="folder-music" size={35} color="black" style={styles.icon} 
                  onPress={() => navigation.navigate('allmusic')}/>
      }
      {activepage == 'account' ? 
        <MaterialCommunityIcons name="account" size={35} color="black" style={styles.iconActive} /> 
          : <MaterialCommunityIcons name="account" size={35} color="black" style={styles.icon} 
          onPress={() => navigation.navigate('account')}/>
      }
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
    paddingEnd: 70,
    paddingStart: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    backgroundColor: '#032f3c',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 15,    
    // borderWidth: 4,
    // borderColor: 'red', 
    // borderStyle: 'solid' 
  },
  icon : {
    width: '25%',
    padding: 8,
    paddingLeft: 10,
    color: primaryColor,
    marginHorizontal: 100,
    // borderWidth: 4,
    // borderColor: 'green', 
    // borderStyle: 'solid' 
  },
  iconActive : {
    marginHorizontal: 100,
    color: primaryColor,
    backgroundColor: themecol,
    borderRadius: 25,
    padding: 10,
    // position: 'absolute',
    bottom: 0,
    // left: '40%',
  }
})