
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// navigations
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { RootStackParamList } from "../App";

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home= ({navigation}: HomeProps) => {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.smallText}>Home Screen</Text>
            <Button
                title='Go to details'
                // onPress={() => navigation.navigate("Details", {
                //   productId: "86"
                // })}
                
                // onPress={() => navigation.navigate("Details")}

                onPress={() => navigation.push('Details', {
                    productId: "86"
                })}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    conatiner : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText : {
        color: "#212121"
    }
})