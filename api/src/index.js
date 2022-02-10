const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const {connectDb} = require("./helpers/db");
const app = express();

const postSchema = new mongoose.Schema({
  name : String
});

const postModel = mongoose.model('Post', postSchema);

const {AUTH_API_URL, HOST, PORT} = process.env;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`);
    console.log(`Started on ${HOST}`);

    const post = new postModel({name : "Alakh"});
    console.log(post);
  });

}

app.get("/test", (req, res) => {
  const url = AUTH_API_URL + "/currentuser";
  console.log("url", url);

  res.json({
    test : "zdarova"
  })

})


connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer)
