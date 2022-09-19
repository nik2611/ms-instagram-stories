const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

console.log(dbConfig);

const sequelize = new Sequelize("postgres://rwciepyo:Ts6beFoaeABbWRGghboogEblE-nFmnWZ@jelani.db.elephantsql.com/rwciepyo");

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   port: dbConfig.port,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.instaStories = require("./instaStories.model.js")(sequelize, Sequelize);

module.exports = db;