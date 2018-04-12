/*jslint node: true, nomen: true */
"use strict";

exports.createActions = function (options) {
    return {
        //comment-to-help-git
        'changesong': require('./changesong').createAction(options),
        //comment-to-help-git
        'startsong': require('./startsong').createAction(options),
        //comment-to-help-git
        'stopsong': require('./stopsong').createAction(options),
        //comment-to-help-git
    };
};
