const express = require('express');
const cors = require('cors');
const app = express();
const port  = 8080;

const getAllUsers = require("./database/user");
const db = require("./database/db");

app.use(cors({
    origin: '*',
}));

app.get('/api/hello', (req, res) => {
    res.json({message: 'Hello World!'});
});

app.get('/api/users', (req, res) => {
    getAllUsers((err, users) => {
        if (err)
        {
            return res.status(500).json({error: err.message});
        }
        res.json(users);
    })
})

app.listen(port, () => {
   console.log(`Server started at http://localhost:${port}/`);
});

process.on('SIGINT', () => {
    db.close((error) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Database closed');
        process.exit(0);
    });

})