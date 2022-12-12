import { findAllUsers } from './db-data';
//import {  findAllCranes }

const util = require('util');

const password = require('password-hash-and-salt');

console.log("Populating the MongoDB database with some sample data ...");

const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;


/*****************************************************************************************************
*
*
* IMPORTANT!!!
*
* MongoDB Connection URL - create your own url with the right cluster name, username, password and database name
*
* Format: mongodb+srv://username:password@clustername
*
* Example (don't use this as you don't have write access):
*
* mongodb+srv://nestjs:ZeEjdswOWHwoenQO@cluster0-dbucq.gcp.mongodb.net
*
*****************************************************************************************************/

const MONGODB_CONNECTION_URL = 'mongodb+srv://nestjs-admin:q7zPMl2BaP3AoZRb@cluster0.votmoh9.mongodb.net/nestjs-cranes?retryWrites=true&w=majority';


// Database Name
const dbName = 'nestjs-cranes';

// Create a new MongoClient
const client = new MongoClient(MONGODB_CONNECTION_URL);

// Use connect method to connect to the Server
client.connect(async (err, client) => {

  try {

    if (err) {
      console.log("Error connecting to database, please check the username and password, exiting.");
      process.exit();
    }

    console.log("Connected correctly to server");

    const db = client.db(dbName);

    /*const cranes = findAllCranes();

    for (let i = 0; i < cranes.length; i++) {

      const crane: any = cranes[i];

      const newCrane: any = { ...crane };
      delete newCrane.id;

      console.log("Inserting cranes ", newCrane);
      const result = await db.collection('cranes').insertOne(newCrane);
      const craneId = result.insertedId;
      console.log("new crane id", craneId);
    }
*/
    const users = findAllUsers();

    console.log("Inserting users " + users.length);

    for (let j = 0; j < users.length; j++) {

      const user = users[j];
      const newUser: any = { ...user };
      delete newUser.id;

      const hashPassword = util.promisify(password(newUser.password).hash);
      newUser.passwordHash = await hashPassword();
      delete newUser.password;
      console.log("Inserting user", newUser);
      await db.collection("users").insertOne(newUser);

    }

    console.log('Finished uploading data, creating indexes.');
    await db.collection('cranes').createIndex({ "url": 1 }, { unique: true });
    console.log("Finished creating indexes, exiting.");
    client.close();
    process.exit();

  }
  catch (error) {
    console.log("Error caught, exiting: ", error);
    client.close();
    process.exit();
  }

});

console.log('uploading data to MongoDB...');

process.stdin.resume();
