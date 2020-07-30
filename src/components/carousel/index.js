import React, {useContext} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useProducts} from '../../hooks';
import {Icon, Image, Text} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';
import Configs from '../../constants/Configs';
import {AppContext} from '../../contexts/AppContext';

export default function Carousel() {
    const {products} = useProducts();
    const {shoppingCart, setShoppingCart} = useContext(AppContext);
    // console.info("products3", products);

    function addToShoppingCart(item) {
        // console.log("add", item);
        item = {...item, quantity: 1 };
        setShoppingCart(shoppingCart.concat(item));
    }

    if (products === null)
        return;

    return (
      <ScrollView
          horizontal={true}
          style={styles.scrollContainer}
      >
          {
              products && products.map( item => (
                  <View style={styles.productContainer} key={item.id}>
                      <Image
                          source={item['imageUri'] && {uri: item['imageUri']}}
                          style={{width: 100, height: 100}}
                          PlaceholderContent={<ActivityIndicator/>}
                      />
                      <Icon
                          name='add-circle'
                          type='ionicon'
                          color={Colors.primary}
                          size={45}
                          onPress={() => addToShoppingCart(item)}
                          containerStyle={{position: "absolute", top: -6 , right: 0}}
                      />
                      <Text>{item.name}</Text>
                      <Text>{`S/ ${item.price}`}</Text>
                  </View>
              ))
          }
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        // flex: 2,
        // width: wp(95),
        // height: hp(10),
        marginHorizontal: Configs.margins.horizontal,
        height: 100,
    },
    productContainer: {
        // flex: 1,
        alignItems: "center",
        height: 145,
        backgroundColor: Colors.white,
        marginRight: 10,
        paddingVertical:5,
        borderRadius: 10,
    },
    contentShape: {
        fontSize: RFValue(15, 680),
    },
});
