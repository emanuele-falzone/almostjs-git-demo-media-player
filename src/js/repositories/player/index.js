/*jslint node: true, nomen: true */
"use strict";

var Promise = require('bluebird'),
    DataStore = require('nedb'),
    ko = require('knockout');

function Repository(options) {
    if (!(this instanceof Repository)) {
        return new Repository(options);
    }
    this.sound = ko.observable();
    this.songs = options.songs;
}

Repository.prototype.play = function (id) {
    var self = this;
    return this.songs.findById(id).then(function (song) {
        self.sound(new Howl({
            src: [
                "http://emanuele.falzone.gitlab.io/almostjs-demo-game-data/sounds/" + song.sound
            ],
            html5: true
        }));
        self.sound().play();
    });
};

Repository.prototype.stop = function () {
    if (this.sound() && this.sound().playing()) {
        this.sound().stop();
    }
};

exports.createRepository = Repository;
