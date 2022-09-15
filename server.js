const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models/");

//configuration
const app = express();

var corsOptions = {
  origin: process.env.CORS
};

db.sequelize.sync() //Synced sequelize
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  db.sequelize.sync({ force: true }).then(() => { //For resyncing after dropping tables
    console.log("Drop and re-sync db.");
  });

//Middlewares
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Routes
require("./app/routes/instaStories.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});





