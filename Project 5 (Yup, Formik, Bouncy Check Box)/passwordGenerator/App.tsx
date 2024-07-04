// ______________________________  Yup  ___________________________________________________
// npm i yup   -->> install 'YUP'                                                          |
// Yup  -->> Package is used for validation as contain itself many objects-properties      |
//                                                                                         |
// Here we call "Yup" and inside "yup" we on;ly have one property "passwordLength" and     |
//  -->> yup itself checks the validation of minLenth, maxLength and required Field.       |
// ________________________________________________________________________________________|

// Formik  (npm i formik)-->> use for building forms                                  |
// BouncyCheckbox (npm i react-native-bouncy-checkbox) -->> attractive CHECKBOX       |
// ___________________________________________________________________________________|

import {StyleSheet, Text, View} from 'react-native'
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { SafeAreaView, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .required('Length is required field')
})

export default function App() {

  const [password, setPassword]  = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChar = '!@#_^%*$&';
    
    if(upperCase)   characterList += upperCase
    if(lowerCase)   characterList += lowerCase
    if(numbers)   characterList += digitChars
    if(symbols)   characterList += specialChar

    const passwordResult = createPassword(characterList, passwordLength)

    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    
    let result = ''
    for(let i=0; i<passwordLength; i++){
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }

  const resetPasswordState = ()  => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    //Even if keyboard pops scroll can be done
    <ScrollView keyboardShouldPersistTaps="handled">    
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}    // keep track of initial value so if any thing change checks the validation
            validationSchema={PasswordSchema}         //checks validation
            onSubmit={ values => {                // takes all the value comming and used in the method/function
              console.log(values);
              generatePasswordString(+values.passwordLength)    // + -->> typecasted to number using typescript 
            }} >
              {({
                values,                 // schema's under formik like all values, errors while running , if touched
                errors,                       // help to make function on the occurance 
                touched,
                isValid,
                handleChange,
                handleSubmit,
                handleReset,
                /* and other goodies */
              }) => (
                <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </ View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 8"
                    keyboardType='numeric'
                    />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowercase</Text>
                  <BouncyCheckbox
                  disableBuiltInState
                  isChecked={lowerCase}
                  onPress={() => setLowerCase(!lowerCase)}
                  fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include Uppercase letters</Text>
                    <BouncyCheckbox
                      disableBuiltInState
                      isChecked={upperCase}
                      onPress={() => setUpperCase(!upperCase)}
                      fillColor="#FED85D"
                          />
                  </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#C9A0DC"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#FC80A5"
                  />
                </View>
            <View style={styles.formActions}>
              <TouchableOpacity
              disabled={!isValid}
              style={styles.primaryBtn}
              onPress={handleSubmit}      // **** onPress calls handleSubmit and handleSubmit by defalut call onSubmit(line 82) itself     | 
//                                        //  onSubmit call our function generatePasswordString(). *************___________________________|
              >
                <Text style={styles.primaryBtnTxt}>Generate Password</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={ () => {
                handleReset();            // own methods can be added below handleReset
                resetPasswordState()      // we can add our own methods when onPress
              }}
              >
                <Text style={styles.secondaryBtnTxt}>Reset</Text>
              </TouchableOpacity>
            </View>
            </>
          )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});