/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['application']) {
            context.top.active('application');
            context.vms['application'].init({mask: 'player'});
        }
        if (!context.vms['playing']) {
            context.vms['player'].active('playing');
            context.vms['playing'].init({mask: 'playerplaying'});
        }
        data = data || {};
        var packet = {
            'id' : data['song'],
        };
        context.vms['playerplaying'].init({input: packet});
    };
};
