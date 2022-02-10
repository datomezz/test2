const express = require("express");
const mongoose = require("mongoose");
const {connectDb} = require("./helpers/db");
const app = express();

//const postSchema = new mongoose.Schema({
  //name : String
//});

//const postModel = mongoose.model('Post', postSchema);

const {HOST, PORT} = process.env;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Auth Started on ${PORT}`);
    console.log(`Started on ${HOST}`);

  });

}

app.get("/test", (req, res) => {
  res.send("auth WORKING...");
});

app.get("/currentuser", (req, res) => {
  res.json({
    name : "datomezz"
  })
})


connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer)

