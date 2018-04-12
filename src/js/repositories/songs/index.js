/*jslint node: true, nomen: true */
"use strict";

var $ = require('jquery'),
    Promise = require('bluebird'),
    DataStore = require('nedb');

function Repository(options) {
    if (!(this instanceof Repository)) {
        return new Repository(options);
    }

    this.db = new Promise(function (resolve, reject) {
        var collection = Promise.promisifyAll(new DataStore({
            filename: 'songs',
            inMemoryOnly: true
        }));
        $.ajax({
            url: "http://emanuele.falzone.gitlab.io/almostjs-demo-game-data/songs.json",
        }).done(function (songs) {
            collection.insert(songs);
            resolve(collection);
        }).fail(function (err) {
            $.notify({message: 'Download failed!'}, {allow_dismiss: true, type: 'danger'});
            reject(err);
        });
    });
}

Repository.prototype.findById = function (id) {
    return this.db.then(function (collection) {
        return collection.findOneAsync({id: id});
    });
};

Repository.prototype.find = function (fields, project) {
    return this.db.then(function (collection) {
        return collection.findAsync(fields, project);
    });
};

exports.createRepository = Repository;
