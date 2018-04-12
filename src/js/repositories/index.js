/*jslint node: true, nomen: true */
"use strict";

exports.createRepositories = function (options) {
    return {
        //comment-to-help-git
        'authors': require('./authors').createRepository(options),
        //comment-to-help-git
        'songs': require('./songs').createRepository(options),
        //comment-to-help-git
    };
};
