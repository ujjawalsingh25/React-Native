
// useColorScheme -->> React HOOK (Use with "APPREANCE" module that give user preferrence of light and dark theme
//                                              and accordingly we style our apps ).

import React from "react";
import {
    View,
    Text,
    StyleSheet,                 // provide style(CSS) to file
    useColorScheme              // Use dark mode, light mode or colors
} from 'react-native'


function AppPro() : JSX.Element {           // because of typeScript we can return a HTML element even if required if JSX
    const isDarkMode = useColorScheme() === 'dark'

    return (
         <View style={styles.container}>
            <Text style={[styles.text, isDarkMode ? styles.whiteText : styles.darkText]}>
                Hello World
            </Text>
         </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro;