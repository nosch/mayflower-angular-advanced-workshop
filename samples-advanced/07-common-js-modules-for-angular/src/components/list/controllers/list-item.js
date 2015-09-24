'use strict';

var styles = require('./../css/list-item.css');

var ListItemCtrl = function () {
    this.styles = styles;
};

ListItemCtrl.prototype.setItemStyle = function () {
    if (this.itemData.completed === true) {
        return styles.completed;
    }

    return styles.open;
};

module.exports = ListItemCtrl;
