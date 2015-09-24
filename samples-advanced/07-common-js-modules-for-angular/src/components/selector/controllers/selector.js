'use strict';

var SelectorCtrl = function (constants) {
    this.filters = constants.filterTypes;

    this.onSelectFilter = function (type) {
        this.setFilter({type: type});
    };

    this.filterIsActive = function (type) {
        return this.noFilter() || this.activeFilter() === type;
    };
};

module.exports = SelectorCtrl;
