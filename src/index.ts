let express = require('express');
let bodyParser = require("body-parser");
let path = require('path');
let app = express();

import {File} from './file';

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  next();
});

let data = [];

// --- startup
// read file and parse data if it exists
console.log(File.test());
File.read("data.json", (res: string) => {
  this.data = JSON.parse(res);
  console.log("Data loaded");
  console.log(this.data);
});

// --- rest api
app.get('/api/armies/:username', (req, res) =>  {
  let username = req.params.username;
  let index = this.data.findIndex(u => u.name === username);

  if (index != -1) {
    console.log("user " + username + " armies served");
    res.status(200).send(this.data[index].armies);
  } else {
    console.log("user " + username + " did not exist");
    res.sendStatus(404);
  }
});
app.get('/api/verifyuser/:username', (req, res) => {
  let username = req.params.username;

  let index = this.data.findIndex(u => u.name === username);
  if (index != -1) {
    console.log("user " + username + " connected");
    res.sendStatus(200);
  } else {
    console.log("user " + username + " did not exist");
    res.sendStatus(404);
  }
});

app.post('/api/register/:username', (req, res) => {
  let username = req.params.username;

  let index = this.data.findIndex(u => u.name === username);
  if (index === -1) {
    let newuser = {
      name: username,
      armies: []
    };
    this.data.push(newuser);
    File.save("data.json", JSON.stringify(this.data), (err) => {
      if (err) {
        res.sendStatus(500);
      }
      console.log("user " + username + " registered");
      res.sendStatus(200);
    });
  } else {
    console.log("user " + username + " already exists");
    res.sendStatus(409);
  }
});

app.post('/api/army/:username', (req, res) => {
  let username = req.params.username;
  let army = req.body;
  console.log(username)
  console.log(army);

  let index = this.data.findIndex(u => u.name === username);
  if (index != -1) {
    let armyIndex = this.data[index].armies.findIndex(a => army === army);
    if (armyIndex != -1) {
      this.data[index].armies.splice(armyIndex, 1, army);
    } else {
      this.data[index].armies.push(army);
    }

    File.save("data.json", JSON.stringify(this.data), (err) => {
      if (err) {
        res.sendStatus(500);
      }
      console.log("user " + username + " army saved");
      res.status(200).send("army succesfully saved");
    });
  } else {
    console.log("user " + username + " does not exist");
    res.sendStatus(400);
  }
});

app.use('/*', (req, res) => {
  console.log("serving client");
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8081, () => {
  console.log('Example listening on port 8081!');
});

module.exports = app;

