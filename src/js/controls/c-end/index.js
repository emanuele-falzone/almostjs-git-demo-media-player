/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout');

function ViewModel(params) {
    var self = this;

    self.context = params.context;
    self.trigger = params.trigger;
    self.player = self.context.repositories.player;

    function register(howl) {
        howl.on('end', self.trigger);
    }
    function unregister(howl) {
        howl.off('end', self.trigger);
    }

    register(self.player.sound());

    var listener = self.player.sound.subscribe(function (howl) {
        unregister(self.player.sound());
        register(howl);
    });

    self.stop = function () {
        unregister(self.player.sound());
        listener.dispose();
    };
}

ViewModel.prototype.id = 'end';

exports.register = function () {
    ko.components.register('c-end', {
        viewModel: {
            createViewModel: function (params, componentInfo) {
                var vm = new ViewModel(params);
                ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                    vm.stop();
                });
                return vm;
            }
        },
        template: require('./index.html'),
        synchronous: true
    });
};
