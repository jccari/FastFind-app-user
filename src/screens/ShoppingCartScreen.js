import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Divider, Image} from 'react-native-elements';
import Colors from '../constants/Colors';

import {AppContext} from '../contexts/AppContext';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ShoppingCartItem from '../components/shopping-cart-item';
import ShoppingCartResume from '../components/shopping-cart-resume';

export default function ShoppingCartScreen(){
    const {shoppingCart} = useContext(AppContext);

    if(shoppingCart.length === 0){
        return (
            <View style={styles.screenEmptyContainer}>
                <Image
                    source={{ uri: "https://firebasestorage.googleapis.com/v0/b/fastfinduserapp.appspot.com/o/cesta.png?alt=media&token=5d2258f7-b59f-4db1-9a2b-d59292f99bac" }}
                    style={{ width: 200, height: 200, alignSelf: "center", marginBottom:20 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Text style={styles.emptyText}> Whoops!</Text>
                <Text style={[styles.emptyText,{marginHorizontal: 20}]}> Parece que tu carrito de compras está vacio</Text>
                <TouchableOpacity>
                    <Text style={[styles.titleText, styles.button,{fontWeight:"bold"}]}> BUSCAR PRODUCTOS </Text>
                </TouchableOpacity>
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
    screenEmptyContainer: {
        flex:1 ,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
    },
    emptyText:{
        color: Colors.primary,
        fontSize: 30,
        marginTop: 20,
        textAlign: "center",
    },
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
        // marginTop: 20,
    },
    listItem: {
        width: wp(90)
    },
    button:{
        backgroundColor: Colors.primary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        marginTop: 55,
    }
});
