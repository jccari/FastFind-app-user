import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';


function ProductItem({product}) {
    return(
        <TouchableOpacity style={styles.productWrapper}>
            <Text style={styles.productName}>{ product.data["name"] }</Text>
            <Icon
                name='angle-right'
                type='font-awesome'
                size={20}
                containerStyle={styles.icon}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    productWrapper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.white,
        width: wp(100),
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    productName:{
        width: wp(55),
    },
    icon:{
        // backgroundColor: "#aaaaaf",
        alignSelf: 'flex-end',
        width: wp(5),
        paddingBottom: 5,
    }
});

export default ProductItem;
