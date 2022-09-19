module.exports = {
    HOST: 'localhostjelani.db.elephantsql.com',
    USER: 'rwciepyo',
    PASSWORD: 'Ts6beFoaeABbWRGghboogEblE-nFmnWZ',
    DB: 'rwciepyo',
    dialect: 'postgres',
    port: process.env.PORT || 7002,
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 20000
    }
  };