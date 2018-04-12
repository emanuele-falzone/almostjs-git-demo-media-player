/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['application']) {
            context.top.active('application');
            context.vms['application'].init({mask: 'songlist'});
        }
        data = data || {};
        var packet = {
            'author' : data['id'],
        };
        context.vms['songlist'].init({input: packet});
    };
};
