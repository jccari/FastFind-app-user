import React, {useContext} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import {Icon, Image, Text} from 'react-native-elements';
import {AppContext} from '../../contexts/AppContext';

export default function Product({item}) {
    const {shoppingCart, setShoppingCart} = useContext(AppContext);

    function addToShoppingCart() {
        // console.log("add", item);
        item = {...item, quantity: 1 };
        setShoppingCart(shoppingCart.concat(item));
    }

    return (
        <View style={styles.productContainer}>
            <Icon
                name='add-circle'
                type='ionicon'
                color={Colors.primary}
                size={45}
                onPress={addToShoppingCart}
                containerStyle={{position: "absolute", top: -6 , right: 0}}
            />
            <Image
                source={item['imageUri'] && {uri: item['imageUri']}}
                style={{width: 100, height: 100}}
                PlaceholderContent={<ActivityIndicator/>}
            />
            <Text style={styles.text} >{item.name}</Text>
            <Text style={[styles.text, {alignSelf: "flex-start", paddingLeft: 10}]}>{`S/ ${item.price}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    productContainer: {
        alignItems: 'center',
        height: 170,
        width: wp(42),
        backgroundColor: Colors.white,
        marginRight: 15,
        marginVertical: 10,
        borderRadius: 15,
    },
    text:{
        color: Colors.secondary,
        fontSize: 15,
    }
});
