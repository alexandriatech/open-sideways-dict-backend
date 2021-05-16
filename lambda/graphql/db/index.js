// const MongoClient = require("mongodb").MongoClient;
const mongoose = require('mongoose');
const URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;

let cachedDb = null;
module.exports = () => {
  if (cachedDb && cachedDb.serverConfig.isConnected()) {
    return Promise.resolve(cachedDb);
  }

  console.log('`${URI}/${DB_NAME}`', `${URI}/${DB_NAME}`)
  mongoose.connect(`${URI}/${DB_NAME}`, { useNewUrlParser: true });
  const db = mongoose.connection;

  // db.on('error',
  //   console.error.bind(console, 'connection error:'));
  // db.once('open', function () {
  //   console.log('success')
  //   // we're connected!
  // });

  return db


  
  // return mongoose.connect(URI, { useNewUrlParser: true }).then(client => {
  //   cachedDb = client.db(DB_NAME);
  //   return cachedDb;
  // });
};