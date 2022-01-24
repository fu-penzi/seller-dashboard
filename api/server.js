const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors({
    origin: 'http://localhost:3000',
}))

const data = require('./data')


app.get('/login', function (req, res, next) {
    res.send({
        'sutatus': 'Sukces!'
    });
});

app.get('/saledata/:username', function (req, res, next) {
    res.send(data.saleData(req.params.username));
});

app.listen(3001, function() {
    console.log('Listening at http://localhost:3001');
})