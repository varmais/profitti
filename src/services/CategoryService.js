'use strict';

var CategoryActions = require('../actions/CategoryActions');
var SongData = require('../data/songs');

class CategoryService {
    getCategories() {
        CategoryActions.gotCategories(SongData.categories);
    }
}

module.exports = new CategoryService();