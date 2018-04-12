/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout');

function ViewModel(params) {
    var self = this;

    // TODO: Execution
    /*
      example:
        //to trigger the event: params.fire;
        document.addEventListener('keydown', params.fire);
    */

    self.context = params.context;

    // THIS CAN BE REMOVED (BEGIN)
    self.stop = function () {
      // TODO: Execution
      /*
        example [continue]:
          document.removeEventListener('keydown', params.fire);
      */
    };
    // THIS CAN BE REMOVED (END)

    self.trigger = function (id) {
        self.context.events[id](self.context);
    };
}

ViewModel.prototype.id = 'end';

exports.register = function () {
    ko.components.register('c-end', {
        viewModel: {
            createViewModel: function (params, componentInfo) {
                var vm = new ViewModel(params);
                ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                    // THIS CAN BE REMOVED (BEGIN)
                    vm.stop();
                    // THIS CAN BE REMOVED (END)
                });
                return vm;
            }
        },
        template: require('./index.html'),
        synchronous: true
    });
};