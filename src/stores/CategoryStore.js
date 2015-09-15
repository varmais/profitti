'use strict';

var CATEGORIES_GET = require('../constants/AppConstants').CATEGORIES_GET;
var BaseStore = require('./BaseStore');
var Categories = require('../data/songs').categories;

class CategoryStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToAction.bind(this));
        this._categories = Categories;
    }

    _registerToAction(action) {
        switch (action.actionType) {
            case CATEGORIES_GET:
                this._categories = action.categories;
                this.emitChange();
                break;

            default:
                break;
        }
    }

    getCategories() {
        return this._categories;
    }
}

module.exports = new CategoryStore();