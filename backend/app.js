const express = require('express');
const cors = require('cors');
const app = express();
const port  = 8080;

app.use(cors({
    origin: '*',
}));

app.get('/api/hello', (req, res) => {
    res.json({message: 'Hello World!'});
});

app.listen(port, () => {
   console.log(`Server started at http://localhost:${port}/`);
});