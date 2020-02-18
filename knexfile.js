require("dotenv").config();
const { DB_URI } = process.env;

module.exports = {
  development: {
    client: "mysql2",
    connection: DB_URI,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    },
    seeds: { directory: "./data/seeds" }
  },

  staging: {
    client: "mysql2",
    connection: DB_URI,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    },
    seeds: { directory: "./data/seeds" }
  },

  production: {
    client: "mysql2",
    connection: DB_URI,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    },
    seeds: { directory: "./data/seeds" }
  }
};
