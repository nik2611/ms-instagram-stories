const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./models/");

//configuration
const app = express();
dotenv.config();

var corsOptions = {
  origin: "http://localhost:8081"
};

db.sequelize.sync() //Synced sequelize
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


  
//Middlewares
//app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



//Routes
require("./routes/instaStories.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});





