'use strict';

angular.module('info')
    .controller('InfoController', function (infoModules) {
        var vm = this;

        vm.infoModules = infoModules;

        vm.pageTitle = 'Informationen';

        vm.contactData = {
            name: 'Norbert Schmidt',
            company: 'Mayflower GmbH, Würzburg',
            email: 'norbert.schmidt@mayflower.de'
        };

        vm.helpText = 'Lorem ipsum dolor set amet...';
    });
