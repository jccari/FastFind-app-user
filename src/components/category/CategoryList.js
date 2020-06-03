import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import CategoryItem from './CategoryItem';


function CategoryList({categories, style}) {

    if (categories === null){
        return ;
    }

    return (
        <ScrollView style={[style]}>
            {/*<View>*/}
                {
                    categories.map( category => (
                        <CategoryItem
                            key={category.id}
                            category={category}
                        />
                    ))
                }
            {/*</View>*/}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor: Colors.dark,
        width: 110,
    }
});

export default CategoryList;
