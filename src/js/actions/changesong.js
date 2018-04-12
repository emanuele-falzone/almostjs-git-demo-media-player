/*jslint node: true, nomen: true */
"use strict";

var $ = require('jquery'),
    Promise = require('bluebird');

function Action(options) {
    this.collection = options.repositories.player;
}

Action.prototype.run = function (parameters, solve) {

    this.collection.stop();
    this.collection.play(parameters['song']).then(function () {
        $.notify({message: 'Change Song'}, {allow_dismiss: true, type: 'success'});
        solve({
            event: 'song-started-from-list',
            data: {
                'song': parameters['song'],
            }
        });
    });
};

exports.createAction = function (options) {
    var action = new Action(options);
    return function (data) {
        return new Promise(function (solve, reject, onCancel) {
            var parameters = (data && data.filters) || {};
            action.run(parameters, solve, onCancel);
        });
    };
};
