"use strict";
var _this = this;
exports.__esModule = true;
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var app = express();
var file_1 = require("./file");
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    next();
});
var data = [];
// --- startup
// read file and parse data if it exists
console.log(file_1.File.test());
file_1.File.read("data.json", function (data) {
    _this.data = JSON.parse(data);
    console.log("Data loaded");
    console.log(_this.data);
});
app.get('/api/armies/:username', function (req, res) {
    var username = req.params.username;
    var index = data.findIndex(function (u) { return u.name === username; });
    if (index != -1) {
        console.log("user " + username + " armies served");
        res.status(200).send(data[index]);
    }
    else {
        console.log("user " + username + " did not exist");
        res.sendStatus(404);
    }
});
app.get('/api/verifyuser/:username', function (req, res) {
    var username = req.params.username;
    var index = data.findIndex(function (u) { return u.name === username; });
    if (index != -1) {
        console.log("user " + username + " connected");
        res.sendStatus(200);
    }
    else {
        console.log("user " + username + " did not exist");
        res.sendStatus(404);
    }
});
app.post('/api/register/:username', function (req, res) {
    var username = req.params.username;
    var index = data.findIndex(function (u) { return u.name === username; });
    if (index === -1) {
        var newuser = {
            name: username,
            armies: []
        };
        data.push(newuser);
        console.log("user " + username + " registered");
        res.sendStatus(200);
    }
    else {
        console.log("user " + username + " already exists");
        res.sendStatus(409);
    }
});
app.use('/*', function (req, res) {
    console.log("serving client");
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(3000, function () {
    console.log('Example listening on port 3000!');
});
module.exports = app;
