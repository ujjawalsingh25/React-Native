
// ______________   FlatList   _________________________
// FlatList is used over "ScrollView" when we have a long list of data as it is more optimised
// FlatList doesnot load whole at once but the data that can be visible are created 
// and later data will be created on the go as we scroll further.
// (Suppose 1000 list of data so we just render 10 at once rather 1000 at once)
// So consume less memory and performance Optimised.

// ______________   Snackbar   _________________________
// Snackbar  -->> Used to display brief messages (notification type)
// npm i react-native-snackbar
// ______________________________________________________________________________________________________


import Snackbar from 'react-native-snackbar';
import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

// Components
import { currencyByRupee } from './constants';
import CurrencyButton from './components/CurrencyButton';



const App = (): JSX.Element => {
  
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) => {
    if(!inputValue){
      return Snackbar.show({
        text: "Not entered any value to convert",
        backgroundColor: "#008080",
        textColor: "#D22B2B"
      })
    }
    const inputAmount = parseFloat(inputValue);
    if(!isNaN(inputAmount)){
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result);
      setTargetCurrency(targetValue.name)
    } else {
        return Snackbar.show({
          text: "Not a valid number to convert",
          backgroundColor: "#008080",
          textColor: "#D22B2B"
        })
    }
  }   

  return (
    <>
      <Text style={styles.headingText}>Currency Converter</Text>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>   
            <TextInput style={styles.rupeeVal}
              maxLength={12}
              value={inputValue}
              clearButtonMode='always'    // only for IOS when we enter value automatically clean
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='Rupee(₹)'
            />       
          </View>
          {resultValue && (
            <Text style={styles.resultTxt} >
              {resultValue}
            </Text>
          )}
        </View>       
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}    // 3 columns will render sideBYside
            data={currencyByRupee}
            keyExtractor={item => item.name}    // data is containing an array and we iterating 
            //                                       and taking names value from each object from currencyByRupee
            renderItem={({item}) => (
              <Pressable style={[
                styles.button,
                targetCurrency === item.name && styles.selected
              ]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item} />      
              </Pressable>                    // spreading and passed.
            )}
          />
        </View>    
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
    paddingHorizontal: 55
  },
  container: {
    flex: 1,
    backgroundColor: '#b2b2b2',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    // marginLeft: 8,
    marginRight: 8,
    fontSize: 28,
    color: '#000000',
    fontWeight: '800',
  },
  rupeeVal: {
    fontSize: 28,
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    // fontSize: 32,
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
