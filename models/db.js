const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "shoes_db",
    password: "12345689",
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};