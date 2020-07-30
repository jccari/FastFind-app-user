import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import React, {useContext} from 'react';
import Colors from '../../constants/Colors';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {AppContext} from '../../contexts/AppContext';


export default function ShoppingCartItem({item, index}) {
    const {shoppingCart, setShoppingCart} = useContext(AppContext);
    function addCount(item) {
        // console.info("addCount", item.count, item.count +1 );
        let duplicate = [...shoppingCart];
        duplicate[index].quantity = duplicate[index].quantity + 1;
        setShoppingCart(Array.from(duplicate));
        // item = {
        //     ...item,
        //     count: item.count + 1
        // }
        // e.preventDefault();
    }

    return(
        <ListItem
            key={item.id}
            leftAvatar={ item["imageUri"] && { source: { uri: item["imageUri"] } }}
            title={item["name"]}
            subtitle={item["price"]}
            badge={{ value: item.quantity , textStyle: { color: 'white' }, containerStyle: { alignSelf:"center" }, badgeStyle:{height: 30, width:30} }}
            bottomDivider
            containerStyle={styles.listItem}
            // leftElement={<Text> X </Text>}
            // rightElement={
            //     <TouchableOpacity
            //         onPress={()=> addCount( item)}
            //     >
            //         <Text> {item.count} </Text>
            //     </TouchableOpacity>
            // }
            onPress={() => addCount(item)}
        />
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: wp(90)
    }
});
