import React, {useContext} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import ProductItem from './ProductItem';
import {AppContext} from '../../contexts/AppContext';
import {Text} from 'react-native-elements';


function ProductsList({products, style}) {
    const {categorySelected} = useContext(AppContext);
    if (categorySelected === null ) {
        return null;
    }

    if (products.length === 0) {
        return (
            <View style={style}>
                <Text style={styles.categoryText}> {categorySelected.data.name.toUpperCase()} </Text>
                <Text> No hay productos en stock.</Text>
            </View>
        );
    }

    return (
        <View style={style}>
            <Text style={styles.categoryText}> {categorySelected.data.name.toUpperCase()} </Text>
            <ScrollView style={styles.scrollWrapper}>
                {
                    products.map(product => (
                        <ProductItem
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 16,
        marginBottom: 10,
    },
    scrollWrapper: {
        // backgroundColor: "#aaaaaa",
        // borderRadius: 15,
    },
});

export default ProductsList;
