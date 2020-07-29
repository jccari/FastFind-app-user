import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CategoryItem from './CategoryItem';
import Colors from '../../constants/Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';


function CategoryList({categories, style}) {

    if (categories === null){
        return ;
    }

    return (
        <ScrollView >
            <View style={styles.container}>
                {
                    categories.map( category => (
                        <CategoryItem
                            key={category.id}
                            category={category}
                        />
                    ))
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        flexDirection: "row",
        // justifyContent: "flex-start",
        // backgroundColor: Colors.dark,
        // width: 110,
        flexWrap: "wrap",
        height:hp(80),
    }
});

export default CategoryList;
