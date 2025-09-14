const db = require('./db');

const  getAllUsers = (callback) => {
    db.all(`SELECT * FROM user`, [],
        (err, rows) => {
        if (err) {
            callback(err,null);
        } else {
            callback(null, rows);
        }
        });
};