const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
  // functions.logger.info('Hello logs!', {structuredData: true});
  response.status(200).send('Hello from Firebase!');
});

exports.searchProducts = functions.https.onRequest( (req, res) => {
  admin.firestore().collection('product').get()
      .then( snapshot => {

          let searched  = [];
          snapshot.docs.forEach(doc => {
              let item = {
                  id: doc.id,
                  ...doc.data(),
              };

              if(item.hasOwnProperty("vendorId")){
                  item.vendor.get().then( res => {
                      item.vendorData = {
                          id: res.id,
                          // ...res.data()
                      };
                  })
              }

              if(item.hasOwnProperty("categoryId")){
                  item.category.get().then( res => {
                      item.categoryData = {
                          id: res.id,
                          // ...res.data()
                      };
                  })
              }
              searched.push(item);
          } );
          /*
          snapshot.docs.forEach(doc => {
              let item = {
                  id: doc.id,
                  ...doc.data(),
              };

              if(item.hasOwnProperty("vendor")){
                  item.vendor.get().then( res => {
                      item.vendorData = {
                          id: res.id,
                          // ...res.data()
                      };
                  })
              }

              if(item.hasOwnProperty("category")){
                  item.category.get().then( res => {
                      item.categoryData = {
                          id: res.id,
                          // ...res.data()
                      };
                  })
              }
              searched.push(item);
          } );
           */
          functions.logger.info(searched);
          res.status(200).json(searched);
      })
      .catch( error => {
        res.send('Error on searchProducts', error);
      });
});
