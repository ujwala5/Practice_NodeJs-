const mysql2 = require('mysql2');

const db = mysql2.createPool({
    host: "localhost",
    port: 3306,
    user: "admin",
    password: "Password@123",
    database: "whatsapp",
    connectionLimit: 50,
    waitForConnections: true,
    charset: 'utf8mb4_unicode_ci'
});
// charset: 'utf8mb4_unicode_ci'
db.on('acquire', function (connection) {
    // console.log('Connection %d acquired', connection.threadId);
});

db.on('connection', function (connection) {
    console.log('Database Connected');
    // connection.query('SET SESSION auto_increment_increment=1')
});

db.on('enqueue', function () {
    // console.log('Waiting for available connection slot');
});

db.on('release', function (connection) {
    //console.log('Connection %d released', connection.threadId);
});

module.exports = db.promise();