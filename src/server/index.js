'use strict'
var app = require('../../server.js');
var fs = require('fs');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var db = mongojs('contactlist', ['contactlist']);

app.use(bodyParser.json());
var contactController = {
    addContact: addContact,
};

function addContact(req, res) {
    db.contactlist.insert(req.body, function (err, doc) {
        res.json(doc);
    });
}

/*
Define All the routes of the controller in this file
*/
app.post('/contact/add', contactController.addContact);
    