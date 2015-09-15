'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

module.exports = {
    gotSongs: (songs) => {
        AppDispatcher.dispatch({
            actionType: AppConstants.SONGS_GET,
            songs: songs
        });
    }
};