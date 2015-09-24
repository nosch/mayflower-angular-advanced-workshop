'use strict';

var angular = require('angular');

angular.module('listCmp')
    .directive('list', require('./list'))
    .directive('listItem', require('./list-item'));
