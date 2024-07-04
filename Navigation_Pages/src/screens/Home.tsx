
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
// import React Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackPramList} from '../App'
// import components
import ProductItem from '../components/ProductItem';
import Seperator from '../components/Seperator';
// import data 
import { PRODUCTS_LIST } from '../data/contants';

type HomeProps = NativeStackScreenProps<RootStackPramList, "Home">

const Home = ({navigation} : HomeProps) => {

  return (
    <View style={styles.container}>
        <FlatList
            data={PRODUCTS_LIST}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Seperator}
            renderItem={({item}) => (
                <Pressable
                  onPress={() => {
                    navigation.navigate('Details', { product: item })
                  }}
                >
                   <ProductItem product={item}/>
                </Pressable>
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
  
      padding: 12,
      backgroundColor: '#FFFFFF',
    },
  });
  
  export default Home