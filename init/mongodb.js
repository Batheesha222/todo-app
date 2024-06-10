const mongoose = require("mongoose");

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("database connection successful")
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectMongoDb;
