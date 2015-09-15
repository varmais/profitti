'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

export default {
    gotCategories: (categories) => {
        AppDispatcher.dispatch({
            actionType: AppConstants.CATEGORIES_GET,
            categories: categories
        });
    }
};