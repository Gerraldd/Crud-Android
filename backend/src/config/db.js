require('dotenv').config();
const { Pool } = require('pg');

const client = new Pool({   
    connectionString: process.env.DATABASE_URL
});

try {
    client.connect();
    console.log('Database Connected');
} catch (error) {
    console.log(error);
}
module.exports = client;