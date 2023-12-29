// const { Client } = require('pg');

// // Create a new PostgreSQL client instance

// const client = new Client({

// user: 'postgres',

// host: 'localhost',

// database: 'doubts',



// port: 5432, // Default PostgreSQL port is 5432

// });

// async function connectDB() {

// try {

// await client.connect();

// console.log('Connected to PostgreSQL');

// return client;

// } catch (err) {

// console.error('Error connecting to PostgreSQL:', err);

// }

// }

// module.exports = { connectDB };

const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"doubts",
    port:5432,
})

module.exports = pool;