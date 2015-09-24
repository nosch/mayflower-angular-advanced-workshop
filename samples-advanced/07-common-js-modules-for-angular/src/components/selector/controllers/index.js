'use strict';

var angular = require('angular');

angular.module('selectorCmp')
    .controller('SelectorCtrl', require('./selector'))
    .controller('SelectorButtonCtrl', require('./selector-button'));
