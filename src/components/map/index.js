import React, {useContext, useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {AppContext} from '../../contexts/AppContext';
import ProjectConfig from '../../constants/Configs';


export default function Map() {
    const {initialMapRegion, currentPosition} = useContext(AppContext);

    const mapRef = useRef();

    useEffect(() => {
        function updateRegionOnMap() {
            // console.log("map position", currentPosition);
            mapRef.current.animateToRegion(currentPosition, 2000);
        }
        updateRegionOnMap();
    }, [currentPosition]);

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={[styles.map]}
            initialRegion={initialMapRegion}
            followUserLocation={true}
            ref={mapRef}
            zoomEnabled={true}
            showsUserLocation={true}
            // initialRegion={initialMapRegion}
            loadingEnabled={true}
        />
    );
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});
