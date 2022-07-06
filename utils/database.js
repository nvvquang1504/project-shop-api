// const {MongoClient} = require('mongodb');
//
// const url = 'mongodb+srv://admin:admin@cluster0.ozxss.mongodb.net/?retryWrites=true&w=majority'
//
// let _db;
// const mongoConnect = (callback) => {
//    MongoClient.connect(url).then(client => {
//       console.log('Connected')
//       _db = client.db('nvvquang1504');
//       callback();
//    }).catch(err => {
//       console.log(err)
//       throw err;
//    })
// }
// const getDb = () => {
//    if (_db) {
//       return _db;
//    }
//    throw 'No database found'
// }
//
//
// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
//
//
