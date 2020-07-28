import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SearchEngine from '../components/searchEngine';
import {useProducts, useRecommended} from '../hooks';
import Carousel from '../components/carousel';
import Colors from '../constants/Colors';
import Configs from '../constants/Configs';
import Recommended from '../components/recommended';


export default function HomeScreen(){
    const {products} = useProducts();
    // console.info("products2", products);

    return (
        <View style={styles.screenContainer}>
            <View style={styles.helloContainer}>
                <View style={{flexDirection: "row"}}>
                    <Text style={styles.helloBrand}>Hola, </Text>
                    <Text style={[styles.helloBrand, {color: Colors.primary}]}> Jhoel </Text>
                </View>
            </View>

            <SearchEngine/>

            <Text style={styles.subtitleStyle}> PRODUCTOS DESTACADOS </Text>
            <Carousel/>

            <Text style={styles.subtitleStyle}> RECOMENDADOS </Text>
            <Recommended/>

            <Text style={styles.subtitleStyle}> PRODUCTOS EN OFERTA </Text>
            <Carousel/>

        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
    },
    helloContainer:{
        // flex: '',
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        width: wp(93),
        // marginHorizontal: Configs.margins.horizontal,
        // flexWrap: 'wrap',
    },
    helloBrand: {
        alignSelf: 'flex-start',
        fontSize: 30,
        paddingTop: 25,
        paddingBottom:30,
        color: Colors.secondary,
        fontWeight: 'bold',
    },
    subtitleStyle: {
        paddingVertical: 12,
        fontSize: 17,
        color: Colors.secondary,
        alignSelf: 'flex-start',
        marginHorizontal: Configs.margins.horizontal,
    }
});
