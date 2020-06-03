import React, {useContext} from 'react';
import {View, ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Image} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import {AppContext} from '../../contexts/AppContext';


function CategoryItem({category}) {
    const {setCategoryProducts, setCategorySelected} = useContext(AppContext);

    async function getProducts(category) {
        console.log("getProducts from", category.id);
        let productsList = await firestore().collection('category').doc(category.id).collection('products').get()
            .then(snapshot => {
                // console.log('snapshot', snapshot);
                return snapshot.docs.map(product => ({
                    id: product.id,
                    data: product.data(),
                }));
            });
        console.log("products List", productsList);
        setCategorySelected(category);
        setCategoryProducts(productsList);
    }

    return (
        <View style={styles.categoryContainer}>
            <TouchableOpacity
                onPress={()=> getProducts(category)}
            >
                <Image
                    source={category.data['imageUri'] && {uri: category.data['imageUri']}}
                    style={styles.categoryImage}
                    PlaceholderContent={<ActivityIndicator/>}
                />
                <Text>{category.data['name']}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        height: 95,
        alignItems: 'center',
        marginTop: 10,
    },
    categoryImage: {
        width: 85,
        height: 80,
        // backgroundColor: "#FFFFFF"
    },
});

export default CategoryItem;
