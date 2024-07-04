
import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function FlatCard() {
    return (
        <View>
            <Text style={styles.titleText}>Style Learning</Text>
            <Text style={styles.headingText}>FlatCard</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Green</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 5,
        margin: 10
    },
    cardOne: {
        backgroundColor:'red'
    },
    cardTwo: {
        backgroundColor:'blue'
    },
    cardThree: {
        backgroundColor:'green'
    }
})