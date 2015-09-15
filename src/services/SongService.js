'use strict';

var SongActions = require('../actions/SongActions');
var SongData = require('../data/songs');

class SongService {
    getSongs() {
        SongActions.gotSongs(SongData.songs);
    }
}

module.exports = new SongService();