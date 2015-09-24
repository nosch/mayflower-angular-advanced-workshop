'use strict';

var _ = require('lodash');

/**
 * collection
 * @type {Array}
 */
var collection = [
    {id: 103, text: 'Zimmer aufräumen', completed: true},
    {id: 102, text: 'Mutter die Wahrheit sagen!', completed: false},
    {id: 101, text: 'Schwimmen lernen', completed: false}
];

/**
 * query
 * @param {Object} [params]
 * @returns {Array|*}
 */
var query = function (params) {
    return _.where(collection, params);
};

/**
 * getOne
 * @param {Number} id
 * @returns {Object}
 */
var getOne = function (id) {
    return query({id: id})[0];
};

/**
 * getAll
 * @returns {Array|*}
 */
var getAll = function () {
    return query();
};

/**
 * create
 * @param {Object} item
 */
var create = function (item) {
    var todo = item;

    todo.id = Math.floor(Math.random() * 1000);

    collection.unshift(todo);

    return todo;
};

/**
 * update
 * @param {Object} item
 * @returns {Object}
 */
var update = function (item) {
    var index = _.findIndex(collection, {id: item.id});

    if (index !== -1) {
        collection[index] = item;

        return collection[index];
    }
};

/**
 * save
 * @param {Object} item
 */
var save = function (item) {
    if (item.id) {
        return update(item);
    } else {
        return create(item);
    }
};

/**
 * remove
 * @param {Number} id
 * @returns {Object}
 */
var remove = function (id) {
    return _.remove(collection, {id: id})[0];
};

module.exports = {
    getAll: getAll,
    getOne: getOne,
    save: save,
    remove: remove
};
