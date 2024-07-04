
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native'
import React from "react"

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Ujjawal',
          status: '  Building UI/UX',
          imageUrl: 'https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1714547152~exp=1714550752~hmac=df5046c4f39ee03ec59eaf130aaf305f2b44bd7f2618d59bfd711c8472807da4&w=740',
        },
        {
            uid: 2,
            name: 'Rahul',
            status: '  I ❤️ To Code',
            imageUrl: 'https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-boy-with-backpack-his-back_1142-40542.jpg?t=st=1714547097~exp=1714550697~hmac=bc067fba6f2e269349a320c660e412e02a37904d0b42d23be692da3730eb31ad&w=740',
        },
        {
          uid: 3,
          name: 'Vikram',
          status: '  Coder',
          imageUrl: 'https://img.freepik.com/free-photo/portrait-handsome-hipster-man-glasses-3d-rendering_1142-51612.jpg?t=st=1714547183~exp=1714550783~hmac=12b25c5e2b3f0fa41eb44104797949310c1ceeffb6eab720ee4e5c95d085baaa&w=740',
        },
        {
          uid: 4,
          name: 'Abhishek',
          status: '  Hello! Learning',
          imageUrl: 'https://img.freepik.com/premium-photo/3d-render-cute-nathan_899449-107.jpg?w=740',
        },
      ];

    return (

        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container}
                scrollEnabled={false}>
                    {contacts.map(({uid, name, status, imageUrl}) => (
                        <View key={uid} style={styles.userCard}>
                            <Image style={styles.userImage}
                                source={{
                                    uri: imageUrl
                                }}
                            />
                            <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                            </View>
                        </View>
                    ))}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 15
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
        
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: 'gray',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12,
    }
})