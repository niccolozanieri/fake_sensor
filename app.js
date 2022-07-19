const express = require('express');

const app = express();

app.get('/api/v1/sensorData', (req, res) => {
    let body = {
        value: `${Math.random() * 1000}`
    }

    res.status(200).json(body);
})