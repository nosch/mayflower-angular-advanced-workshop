'use strict';

var express = require('express');
var todos = express.Router();
var resource = require('../resource/todos');

todos.get('/', function (req, res) {
    res.send(resource.getAll());
});

todos.get('/:id', function (req, res) {
    var id = +req.params.id;

    if (isNaN(id)) {
        return res.sendStatus(400);
    }

    if (!resource.getOne(id)) {
        return res.sendStatus(404);
    }

    res.send(resource.getOne(id));
});

todos.post('/', function (req, res) {
    var data = req.body;

    if (data.id || !data.text || data.completed === undefined) {
        return res.sendStatus(400);
    }

    res.send(resource.save(data));
});

todos.put('/', function (req, res) {
    var data = req.body;

    if (!data.id || !data.text || data.completed === undefined) {
        return res.sendStatus(400);
    }

    data.id = +data.id;

    if (!resource.getOne(data.id)) {
        return res.sendStatus(404);
    }

    res.send(resource.save(data));
});

todos.delete('/:id', function (req, res) {
    var id = +req.params.id;

    if (isNaN(id)) {
        return res.sendStatus(400);
    }

    if (!resource.getOne(id)) {
        return res.sendStatus(404);
    }

    res.send(resource.remove(id));
});

module.exports = todos;
