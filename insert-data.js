require('dotenv').config();
const { MongoClient } = require('mongodb');

// Replace the following with your Atlas connection string
const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@happyhaddock.e6r3s.mongodb.net/HappyHaddock?retryWrites=true&w=majority`;
const client = new MongoClient(url);

// The database to use
const dbName = 'development';

async function run() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection('activities');

    // Construct a document
    let activityArray = [
      {
        name: 'Go for a walk',
        cost: 0.0,
        accessibility: 0.8,
        categories: ['outdoor', 'exercise'],
        size: 'appetiser',
      },
      {
        name: 'Go for a cycle',
        cost: 0.0,
        accessibility: 0.8,
        categories: ['outdoor', 'exercise'],
        size: 'main',
      },
    ];

    // Insert a single document, wait for promise so we can read it back
    activityArray.forEach(async (activityDocument) => {
      const promise = await col.insertOne(activityDocument);
    });
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
