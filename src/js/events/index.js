/*jslint node: true, nomen: true */
"use strict";

exports.createEvents = function (options) {
    return {
        //comment-to-help-git
        'end': require('./end').createEvent(options),
        //comment-to-help-git
        'play': require('./play').createEvent(options),
        //comment-to-help-git
        'song-started-from-list': require('./song-started-from-list').createEvent(options),
        //comment-to-help-git
        'songselected': require('./songselected').createEvent(options),
        //comment-to-help-git
        'songstarted': require('./songstarted').createEvent(options),
        //comment-to-help-git
        'songstopped': require('./songstopped').createEvent(options),
        //comment-to-help-git
        'stop': require('./stop').createEvent(options),
        //comment-to-help-git
    };
};
