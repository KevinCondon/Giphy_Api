//#region 
// requires
const axois = require('axios')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv'.config());
// uses

app.use('/get')
axois({
    method: 'GET',
    url: 'url',

}).then(response => {
    console.log('vsdv', response.data);

}).catch(error => {
    console.log('error:', error);

}