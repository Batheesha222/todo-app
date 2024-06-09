const express = require("express");
const mongoose = require("mongoose");


const PORT  =  8000;
//init app
const app = express();

const connectionUrl = "mongodb://0.0.0.0:27017/todoDb";

mongoose
  .connect(connectionUrl)
  .then(() => console.log("database connection successful"))
  .catch((error) => console.log(error.message));

  //view engin
app.set("view engine", "ejs");

// listen sever
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})