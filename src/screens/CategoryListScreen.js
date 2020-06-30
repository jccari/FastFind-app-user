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

    // useEffect( () => {
    //     async function getCategories() {
    //         let categoryList = await firestore().collection('category').orderBy("order", "asc").get()
    //             .then(snapshot => {
    //                 return snapshot.docs.map( doc => ({
    //                     id: doc.id,
    //                     data: doc.data(),
    //                 }));
    //             });
    //
    //         console.log("categories", categoryList);
    //         categoryList.length > 1 ? setCategorySelected( categoryList[0]) : setCategorySelected(null);
    //         setCategories(categoryList);
    //     }
    //
    //     getCategories();
    // }, []);

    return (
        <View style={styles.screenContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.textTitle}> Todas las Categorías </Text>
            </View>

            <View style={styles.bodyContainer}>
                <CategoryList
                    categories={categories}
                    style={styles.categoryContainer}
                />

                <ProductsList
                    products={categoryProducts}
                    style={styles.categoryProductsContainer}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
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
    bodyContainer: {
        flex: 1,
        flexDirection: 'row',
        fontSize: RFValue(15, 680),
    },
    categoryContainer:{
        // backgroundColor: "#cecece",
        width: wp(35),
    },
    categoryProductsContainer:{
        // backgroundColor: "#b4b4b4",
        width: wp(65),

    }
});
