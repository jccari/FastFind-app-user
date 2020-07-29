import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RFValue} from "react-native-responsive-fontsize";
import {Divider, ListItem} from 'react-native-elements';
import Colors from '../constants/Colors';

import {AppContext} from '../contexts/AppContext';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ShoppingCartItem from '../components/shopping-cart-item';
import ShoppingCartResume from '../components/shopping-cart-resume';

export default function ShoppingCartScreen(){
    const {shoppingCart} = useContext(AppContext);

    if(shoppingCart.length === 0){
        return (
            <View style={styles.screenContainer}>
                <Text> Tu lista de compras </Text>
                <Divider style={{backgroundColor:Colors.secondary}}/>
                <Text> Carrito Vacio </Text>
            </View>
        )
    }

    return (
        <View style={styles.screenContainer}>
            <View>
                <Text style={styles.titleText}> Tu lista de compras </Text>
                <Divider style={{backgroundColor:Colors.secondary}}/>
                {
                    shoppingCart && shoppingCart.map( (item, index) => (
                        <ShoppingCartItem
                            key={item.id}
                            item={item}
                            index={index}
                        />
                    ))
                }
            </View>
            <ShoppingCartResume/>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex:1 ,
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    titleText: {
        fontSize: 25,
        color: Colors.secondary,
        paddingVertical: 15,
    },
    listItem: {
        width: wp(90)
    }
});
