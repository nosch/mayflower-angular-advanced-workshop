'use strict';

require('babel-core/polyfill');

var angular = require('angular');

angular.module('app', [
    require('./components/container'),
    require('./components/selector'),
    require('./components/creator'),
    require('./components/list')
]);

require('./config');
require('./services');
