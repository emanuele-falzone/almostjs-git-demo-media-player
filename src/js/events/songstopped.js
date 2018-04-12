/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['application']) {
            context.top.active('application');
            context.vms['application'].init({mask: 'player'});
        }
        if (!context.vms['stopped']) {
            context.vms['player'].active('stopped');
            context.vms['stopped'].init({mask: 'playerstopped'});
        }
        data = data || {};
        var packet = {
            'id' : data['song'],
        };
        context.vms['playerstopped'].init({input: packet});
    };
};
