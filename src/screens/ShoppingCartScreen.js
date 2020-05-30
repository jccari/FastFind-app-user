import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RFValue} from "react-native-responsive-fontsize";


export default function ShoppingCartScreen(){
    return (
        <View style={styles.screenContainer}>
            <Text> ShoppingCartScreen </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contentShape: {
        fontSize: RFValue(15, 680),
    },
});
