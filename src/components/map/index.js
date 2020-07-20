import React, {useContext, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Colors from '../../constants/Colors';
import {AppContext} from '../../contexts/AppContext';


export default function Map() {
    const {initialMapRegion, currentPosition, stores} = useContext(AppContext);

    const mapRef = useRef();

    function updateRegionOnMap() {
        console.log('map position', currentPosition);
        mapRef.current.animateToRegion(currentPosition, 2000);
    }

    function drawMarketPlaces() {
        return stores.map((market, index) => (
            <Marker
                coordinate={market.data.position}
                title={market.data.name}
                key={index}
                // onPress={() => onPressMarketPlace(market)}
            >
                <View>
                    <IconAwesome
                        name="store"
                        color={Colors.warning}
                        size={24}
                    />
                </View>
            </Marker>
        ));
    }

    return (
        <View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={[styles.map]}
                initialRegion={initialMapRegion}
                followUserLocation={true}
                ref={mapRef}
                zoomEnabled={true}
                showsUserLocation={true}
                loadingEnabled={true}
            >
                {drawMarketPlaces()}
            </MapView>
            <IconIonicons
                style={styles.locateIcon}
                name={'md-locate'}
                size={45}
                color={Colors.secondary}
                onPress={updateRegionOnMap}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: wp(100),
        height: hp(100),
    },
    locateIcon: {
        position: 'absolute',
        bottom: 7,
        right: 10,
    },
});
