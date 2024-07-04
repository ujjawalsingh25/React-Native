import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNav from '../components/BottomNav'

const AllPlaylists = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textt}>All Playlists</Text>
      <View style={styles.bottonNav}>
        <BottomNav activepage={'allplaylists'} navigation={navigation}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  bottonNav: {
    position: 'absolute',
    // bottom: 8,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  textt: {
    color: '#fff',
    fontWeight: 'bold',
  }
})

export default AllPlaylists