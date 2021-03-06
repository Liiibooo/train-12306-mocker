const express = require('express');
const path = require('path');
const apiMocker = require('mocker-api');

const app = express();

apiMocker(app, path.resolve('./mocker/mocker.js'))
app.listen(5000, () => {
    console.log('open http://localhost:5000');
});