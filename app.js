const express = require('express');
const app = express();

require('dotenv').config();





app.use(express.static('public'));






app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
    }
);


app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT);
    }

);
