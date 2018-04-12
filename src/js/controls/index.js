/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout');

exports.register = function () {
    //comment-to-help-git
    require('./main-application').register();
    //comment-to-help-git
    require('./c-application').register();
    //comment-to-help-git
    require('./c-end').register();
    //comment-to-help-git
    require('./c-player').register();
    //comment-to-help-git
    require('./c-playerplaying').register();
    //comment-to-help-git
    require('./c-playerstopped').register();
    //comment-to-help-git
    require('./c-playing').register();
    //comment-to-help-git
    require('./c-songlist').register();
    //comment-to-help-git
    require('./c-stopped').register();
    //comment-to-help-git
};
