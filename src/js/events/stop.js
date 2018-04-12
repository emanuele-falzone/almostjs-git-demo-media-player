/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
                'song' : data['id'],
            },
            promise = context.actions['stopsong']({filters: packet});
        context.runningActionsByContainer['playing'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['playing'].splice(
                context.runningActionsByContainer['playing'].indexOf(promise),
                1
            );
            if (result.event) {
                context.events[result.event](context, result.data);
            }
        });
    };
};
