'use strict';

var angular = require('angular');

angular.module('listCmp')
    .controller('ListCtrl', require('./list'))
    .controller('ListItemCtrl', require('./list-item'));
