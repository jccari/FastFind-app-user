import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
import SearchEngine from '../components/searchEngine';
import {useProducts} from '../hooks';
import Product from '../components/product';
import Configs from '../constants/Configs';
import {AppContext} from '../contexts/AppContext';
import IconIonicons from 'react-native-vector-icons/Ionicons'
import Colors from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';

export default function ProductScreen() {
    const {categoryProducts} = useContext(AppContext);
    const [allItems, setAllItems] = useState(categoryProducts);
    const navigation = useNavigation();
    // console.log("products List2", categoryProducts);

    function goBack() {
        navigation.goBack();
    }

    if (categoryProducts === null)
        return;

    return (
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <Icon
                    name='md-arrow-back-circle'
                    type='ionicon'
                    color={Colors.primary}
                    size={45}
                    onPress={goBack}
                />
                <SearchEngine
                    items={allItems}
                    setItems={setAllItems}
                    allItems={categoryProducts}
                />
            </View>
            {/*<Divider style={{ backgroundColor: 'blue' }} />;*/}
            <View style={styles.bodyContainer}>
                {
                    allItems && allItems.map( product => (
                       <Product
                           item={product.data}
                           key={product.id}
                       />
                    ))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        // justifyContent: '',
        alignItems: "center",
        marginHorizontal: Configs.margins.horizontal,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Configs.margins.horizontal,
        // height: hp(12),
        // width: wp(100),
    },
    bodyContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        // height: hp(82),
        // width: wp(100),
    },
});
