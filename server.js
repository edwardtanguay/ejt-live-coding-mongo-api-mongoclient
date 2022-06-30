import express from 'express';
import { MongoClient } from 'mongodb';

const conn = 'mongodb://localhost:27017';
const client = new MongoClient(conn);

await client.connect();
const db = client.db('northwind');
const employees = await db.collection('employees').find().toArray();
console.log(employees);

// const app = express();
// const port = 3456;

// app.get('/', (req, res) => {
// 	res.send('<h1>Mongo API Test</h1>')
// })


// app.listen(port, () => {
// 	console.log(`listening at: http://localhost:${port}`);
// })