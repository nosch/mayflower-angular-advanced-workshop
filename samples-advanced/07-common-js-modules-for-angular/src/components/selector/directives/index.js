'use strict';

var angular = require('angular');

angular.module('selectorCmp')
    .directive('selector', require('./selector'))
    .directive('selectorButton', require('./selector-button'));
