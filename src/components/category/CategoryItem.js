import React, {useContext} from 'react';
import {View, ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Image} from 'react-native-elements';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';
import {AppContext} from '../../contexts/AppContext';
import {useNavigation} from '@react-navigation/native';


function CategoryItem({category}) {
    const {setCategoryProducts, setCategorySelected} = useContext(AppContext);
    const navigation = useNavigation();

    async function getProducts(category) {
        console.log("getProducts from", category.id);
        let productsList = await firestore().collection('product').where("categoryId","==", category.id).get()
            .then(snapshot => {
                // console.log('snapshot', snapshot.docs.length);
                let tmp = snapshot.docs.map(product => ({
                    id: product.id,
                    data: product.data(),
                }));
                setCategorySelected(category);
                setCategoryProducts(tmp);
                // console.log("products List", tmp.length, tmp);

                navigation.navigate("productList");
            });
        // console.log("products List", productsList);
        // setCategorySelected(category);
        // setCategoryProducts(productsList);

        // navigation.navigate("productList");
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
                {/*<Text>{category.data['name']}</Text>*/}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        // flex: 1,
        height: 95,
        width: wp(44),
        // alignItems: 'center',
        marginTop: 10,

    },
    categoryImage: {
        width: 182,
        height: 90,
        // backgroundColor: "#FFFFFF"
    },
});

export default CategoryItem;
