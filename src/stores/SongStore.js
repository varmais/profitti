'use strict';

var SONGS_GET = require('../constants/AppConstants').SONGS_GET;
var BaseStore = require('./BaseStore');
var Songs = require('../data/songs').songs;

class SongStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToAction.bind(this));
        this._songs = Songs;
    }

    _registerToAction(action) {
        switch (action.actionType) {
            case SONGS_GET:
                this._songs = action.songs;
                this.emitChange();
                break;

            default:
                break;
        }
    }

    getSongs() {
        return this._songs;
    }
}

module.exports = new SongStore();