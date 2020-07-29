import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../constants/Colors';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {AppContext} from '../../contexts/AppContext';


export default function ShoppingCartResume() {
    const {shoppingCart} = useContext(AppContext);
    const [subTotal, setSubtotal] = useState(0.00);
    const [igv, setIgv] = useState(0.00);
    const [total, setTotal] = useState(0.00);

    useEffect(()=>{
        let STtmp = 0;
        shoppingCart.forEach( item => {
            if (item.hasOwnProperty("oldPrice"))
                STtmp += item.oldPrice * item.quantity;
            else
                STtmp += item.price * item.quantity;
        });
        setSubtotal(STtmp.toFixed(2));
        setIgv((STtmp*0.18).toFixed(2));
        setTotal((STtmp + STtmp*0.18).toFixed(2));
    },[shoppingCart]);

    function processPurchase() {

    }

    return(
        <View style={styles.container}>
            <View style={styles.resumeContainer}>
                <Text style={styles.text}>Subtotal: {subTotal}</Text>
                <Text style={styles.text}>IGV: {igv}</Text>
                <Text style={styles.text}>Total: {total}</Text>
            </View>
            <TouchableOpacity style={styles.processPurchase}>
                <Text style={[styles.text, {fontWeight: "bold", fontSize: 20,}]}>PROCESAR COMPRA</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp(90),
        alignSelf: "center",
        marginVertical: 20,
    },
    resumeContainer: {
      padding: 10,
    },
    text:{
        color: Colors.secondary,
        fontSize: 15,
        marginVertical: 3,
    },
    processPurchase:{
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 15,
        alignItems: 'center'
    }
});
