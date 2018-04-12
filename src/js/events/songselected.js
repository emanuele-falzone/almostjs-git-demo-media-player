/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
                'song' : data['id'],
            },
            promise = context.actions['changesong']({filters: packet});
        context.runningActionsByContainer['application'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['application'].splice(
                context.runningActionsByContainer['application'].indexOf(promise),
                1
            );
            if (result.event) {
                context.events[result.event](context, result.data);
            }
        });
    };
};
