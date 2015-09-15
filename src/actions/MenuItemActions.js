'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

export default {
    gotMenuItems: (categories) => {
        AppDispatcher.dispatch({
            actionType: AppConstants.MENUITEMS_GET,
            menuItems: menuItems
        });
    }
};