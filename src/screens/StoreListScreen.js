import React from 'react';
import {View, StyleSheet} from 'react-native';
import Map from '../components/map';


export default function StoreListScreeen() {
    return (
        <View style={styles.screenContainer}>
            <Map/>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
