import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNav from '../components/BottomNav'

const Account = () => {
  return (
    <View style={styles.container}>
      <Text>Accounts</Text>
      <View style={styles.bottonNav}>
        <BottomNav activepage={'account'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottonNav: {
    position: 'absolute',
    // bottom: 8,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  }
})

export default Account