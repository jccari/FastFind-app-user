import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { SearchBar } from 'react-native-elements';
import {AppContext} from '../../contexts/AppContext';
import Colors from '../../constants/Colors';

export default function SearchEngine({items, setItems}) {
    const {textSearch, setTextSearch, setCategoryProducts, categoryProducts} = useContext(AppContext);

    const onChangeTextSearch = function (search) {
        setTextSearch(search);
        setItems( items.filter((item)=> item["data"]["name"].toLowerCase().includes(search.toLowerCase())) );
    };

    const onClearSearch = function () {
        setItems(categoryProducts);
    };

    return (
        <SearchBar
            placeholder={"¿Estás buscando algo?"}
            onChangeText={onChangeTextSearch}
            value={textSearch}
            containerStyle={styles.searchBar}
            inputContainerStyle={styles.inputContainer}
            onClear={onClearSearch}
        />
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    searchBar: {
        flexDirection: "row",
        // marginHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: Colors.background,
        borderColor: Colors.background,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },
    inputContainer: {
        borderRadius: 15,
        backgroundColor: Colors.unchecked,
        // color: Colors.white,
    },
    contentShape: {
        fontSize: RFValue(15, 680),
    },
});
