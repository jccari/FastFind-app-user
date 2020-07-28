import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useProducts} from '../../hooks';
import {Image, Text} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';
import Configs from '../../constants/Configs';

export default function Carousel() {
    const {products} = useProducts();
    // console.info("products3", products);

    if (products === null)
        return;

    return (
      <ScrollView
          horizontal={true}
          style={styles.scrollContainer}
      >
          {
              products && products.map( item => (
                  <View style={styles.productContainer}>
                      <Image
                          source={item['imageUri'] && {uri: item['imageUri']}}
                          style={{width: 100, height: 100}}
                          PlaceholderContent={<ActivityIndicator/>}
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
