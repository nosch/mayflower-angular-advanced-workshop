'use strict';

var styles = require('./../css/container.css');

var ContainerCtrl = function (constants, appStore) {
    this.styles = styles;
    this.store = appStore;
    this.activeFilter = appStore.getActiveFilterType();
    this.hasNoFilter = {noFilter: this.store.getItems().length === 0}
};

ContainerCtrl.prototype.noActiveFilter = function () {
    return this.store.getItems().length === 0;
};

module.exports = ContainerCtrl;
