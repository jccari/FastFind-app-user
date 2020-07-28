import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';
import Colors from '../constants/Colors';
import {AppContext} from '../contexts/AppContext';
import ProductsList from '../components/category/ProductsList';
import CategoryList from '../components/category/CategoryList';


export default function CategoryListScreen() {
    const {categories, setCategories, categoryProducts, setCategorySelected} = useContext(AppContext);

    return (
        <View style={styles.screenContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.textTitle}> Todas las Categorías </Text>
            </View>

            {/*<View>*/}
                <CategoryList
                    categories={categories}
                    // style={styles.categoryContainer}
                />

                {/*<ProductsList*/}
                {/*    products={categoryProducts}*/}
                {/*    style={styles.categoryProductsContainer}*/}
                {/*/>*/}
            {/*</View>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        // flex: 1,
        backgroundColor: Colors.light,
        paddingLeft: RFValue(15, 680),
        paddingRight: RFValue(15, 680),
    },
    titleContainer: {
        height: RFValue(75, 680),
        width: wp('100%'),
        justifyContent: 'center',
    },
    textTitle: {
        color: Colors.secondary,
        fontSize: RFValue(30, 680),
        fontWeight: 'bold',
    },

    // bodyContainer: {
    //     // flex: 1,
    //     flexDirection: 'row',
    //     // fontSize: RFValue(15, 680),
    // },
    // categoryContainer:{
    //     // flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     backgroundColor: "#cecece",
    //     // width: wp(50),
    // },
    // categoryProductsContainer:{
    //     // backgroundColor: "#b4b4b4",
    //     width: wp(95),
    //
    // }
});
