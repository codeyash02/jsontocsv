const express = require('express')
const converter = require('json-2-csv');
const mongoose = require('mongoose')
const url = "mongodb+srv://codedrill:codedrill@lhsclustor.90zaq.mongodb.net/LHSDatabase?authSource=admin&replicaSet=atlas-5uulth-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
const getData = require('./findRouter')
const app = express()
const port = 4000
const connectDB = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(`${url}`)
      .then(() => {
        resolve("connected to DB successfully !");
      })
      .catch(() => {
        reject("connection with DB failed");
      });
  });
}
app.use('/',getData)
app.listen(port, () => {
  connectDB().then((data) => console.log(data))
  console.log(` App listening on port ${port}`)
})