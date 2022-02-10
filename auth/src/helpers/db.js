const mongoose = require("mongoose");
const {MONGO_URL} = process.env;

module.exports.connectDb = () => {
  mongoose.connect(MONGO_URL, {useNewUrlParser : true});

  return mongoose.connection;
}
