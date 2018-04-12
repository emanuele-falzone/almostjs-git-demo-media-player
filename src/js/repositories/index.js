/*jslint node: true, nomen: true */
"use strict";

exports.createRepositories = function (options) {
    var songs = require('./songs').createRepository(options);
    return {
        //comment-to-help-git
        'authors': require('./authors').createRepository(options),
        //comment-to-help-git
        'player': require('./player').createRepository({songs: songs}),
        //comment-to-help-git
        'songs': songs,
        //comment-to-help-git
    };
};
