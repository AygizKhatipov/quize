const express = require('express');
const addHTTPHeader = require('../middleware/addHTTPheader')

const serverConfig=(app) => {
    app.use(express.urlencoded({extended:true}));
    app.use(express.json());
    app.use(express.static('public'))
    app.use(addHTTPHeader);
}

module.exports = serverConfig