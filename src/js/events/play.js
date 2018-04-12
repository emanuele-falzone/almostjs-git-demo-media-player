/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
                'song' : data['id'],
            },
            promise = context.actions['startsong']({filters: packet});
        context.runningActionsByContainer['stopped'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['stopped'].splice(
                context.runningActionsByContainer['stopped'].indexOf(promise),
                1
            );
            if (result.event) {
                context.events[result.event](context, result.data);
            }
        });
    };
};
