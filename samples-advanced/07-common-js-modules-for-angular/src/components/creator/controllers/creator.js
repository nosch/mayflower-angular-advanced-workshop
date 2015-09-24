'use strict';

var styles = require('./../css/creator.css');

var CreatorCtrl = function () {
    var ctrl = this;

    var _add = function (text) {
        if (text) {
            ctrl.addItem({text: text});
            ctrl.setFilter();
        }

        ctrl.text = null;
    };

    this.styles = styles;

    this.onEnter = function ($event) {
        var text = ctrl.text;

        if ($event.which === 13) {
            _add(text);
        }
    };

    this.onAdd = function () {
        var text = ctrl.text;

        _add(text);
    };
};

module.exports = CreatorCtrl;
