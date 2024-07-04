
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Seperator = () => {

  return (
    <View style = {styles.seperator}>
      {/* It is to give line gap or seperation */}
    </View>
  )
}

const styles = StyleSheet.create({
    seperator: {
        height: 0.8,
        backgroundColor: '#CAD5E2'
    }
})

export default Seperator;
