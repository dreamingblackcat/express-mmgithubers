import { dbName } from '../../env.json';
var MongoClient = require('mongodb').MongoClient;

// Connection URL
console.log(dbName);
var url = `mongodb://localhost:27017/${dbName}`;

export default MongoClient.connect(url);