const express = require('express');

const serverConfig=(app) => {
    app.use(express.urlencoded({extended:true}));
    app.use(express.json());
    app.use(express.static('public'))
}

module.exports = serverConfig