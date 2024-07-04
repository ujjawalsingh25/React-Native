
// Linking  -->> (DeepLinking) to navigate to provided app link (like using QR Codes Linking is done to navigate)

import React from 'react'
import {StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native'


export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

    return (
        <View>
            <Text style={styles.headingText}>Action Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>Tour to Ladhak</Text>
                </View>
                <Image  style={styles.cardImage}
                    source={{
                        uri: 'https://images.pexels.com/photos/20691222/pexels-photo-20691222/free-photo-of-ladhak.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    }}
                /> 
                <View style={styles.bodyContainer} >
                    <Text numberOfLines={3}>
                    Ladakh is one of the highest regions of the world. Its natural features consist mainly of high plains and deep valleys. The high plain predominates in the east, diminishing gradually toward the west. In southeastern Ladakh lies Rupshu, brackish lakes with a uniform elevation of about 13,500 feet. 
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.britannica.com/place/Ladakh')}>
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.instagram.com/lehladakh.in/')}>
                        <Text style={styles.socialLinks}>Follow Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#717171',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
        
    }

})