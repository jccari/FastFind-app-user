import {useContext} from 'react';
import {AppContext} from '../contexts/AppContext';
import firestore from './firestore';

export default function useProducts() {
    const {products, setProducts} = useContext(AppContext);

    const getProducts = async function (){
        let tmp = await firestore().collection("product").get()
            .then( snapshot => {
                return snapshot.docs.map( doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            })
            .catch( error => {
                console.error("Error on get products", error);
            });

        // console.info("products" ,tmp);
        setProducts(tmp);
        return tmp;
    };

    if (products === null){
        let tmp = getProducts();
        return {tmp, setProducts};
    }

    return {products, setProducts};
}

/*
export default async function useProducts() {
    const {products, setProducts} = useContext(AppContext);

    if (products === null){
        // let tmp = [];
        let tmp = await firestore().collection("product").get()
            .then( snapshot => {
                let items = snapshot.docs;
                console.info("items", items);
                items.forEach( doc => {
                    let item = {
                        id: doc.id,
                        ...doc.data(),
                    };

                    if (item.hasOwnProperty("vendorId")){
                        firestore.collection("store").doc(item.vendorId).get()
                            .then( res => {
                                item.vendorData = res.data();
                            })
                    }

                    if (item.hasOwnProperty("categoryId")){
                        firestore.collection("category").doc(item.categoryId).get()
                            .then( res => {
                                item.categoryData = res.data();
                            })
                    }

                    tmp.push(item);
                });
                return snapshot.docs;
                // setProducts(tmp);
                // return tmp;
            })
            .catch( error => {
                console.error("Error on get products", error);
            });
        setProducts(tmp);
        return tmp;
    }

    return products;

 */
