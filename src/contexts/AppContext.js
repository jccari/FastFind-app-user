import React, {useState, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import ProjectConfig from '../constants/Configs';
import {PermissionsAndroid, Platform} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const AppContext = React.createContext();

async function requestPermissions() {
    if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization();
        Geolocation.setRNConfiguration({
            skipPermissionRequests: false,
            authorizationLevel: 'whenInUse',
        });
    }

    if (Platform.OS === 'android') {
        await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
    }
}

function AppContextProvider({children}) {
    const initialMapRegion = {
        latitude: -8.8906,
        longitude: -75.0556,
        latitudeDelta: 15.2999,
        longitudeDelta: 10.15,
    };
    const [currentPosition, setCurrentPosition] = useState({...initialMapRegion});

    const [categories, setCategories] = useState([]);
    const [categorySelected, setCategorySelected] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [stores, setStores] = useState([]);

    //This function get initial user position
    useEffect(() => {
        requestPermissions();
        getCurrentLocation();
    }, []);

    // This method update periodically user position
    // useEffect(() => {
    //     const locationInterval = setInterval(() => {
    //         getCurrentLocation();
    //     }, ProjectConfig.intervals.currentLocationTime);
    //     return () => {
    //         clearInterval(locationInterval);
    //     };
    // }, []);

    function getCurrentLocation() {
        Geolocation.getCurrentPosition(
            position => {
                // console.log("position", position.coords.latitude, position.coords.longitude);
                let newPosition = {
                    latitude: parseFloat(position.coords.latitude),
                    longitude: parseFloat(position.coords.longitude),
                    latitudeDelta: ProjectConfig.map.latitudeDelta,
                    longitudeDelta: ProjectConfig.map.longitudeDelta,
                };
                setCurrentPosition(newPosition);
            },
            error => console.log(error),
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000,
            },
        );
    }

    useEffect(() => {
        async function getCategories() {
            let categoryList = await firestore().collection('category').orderBy('order', 'asc').get()
                .then(snapshot => {
                    return snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(),
                    }));
                });

            console.log('categories', categoryList);
            categoryList.length > 1 ? setCategorySelected(categoryList[0]) : setCategorySelected(null);
            setCategories(categoryList);
        }

        getCategories();
    }, []);

    useEffect(() => {
        async function getStores() {
            let storeList = await firestore().collection('store').get()
                .then(snapshot => {
                    return snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(),
                    }));
                });

            storeList.forEach(store => {
                // console.log('store.position', store.data.position);
                store.data.position = {
                    latitude: store.data.position["_latitude"],
                    longitude: store.data.position["_longitude"],
                };
            });

            // console.log('stores', storeList);
            setStores(storeList);
        }

        getStores();
    }, []);

    const contextValues = {
        initialMapRegion,
        currentPosition, setCurrentPosition,

        categories, setCategories,
        categorySelected, setCategorySelected,
        categoryProducts, setCategoryProducts,
        stores, setStores,
    };

    return (
        <AppContext.Provider
            value={contextValues}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
