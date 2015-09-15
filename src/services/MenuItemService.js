'use strict';

var MenuItemActions = require('../actions/MenuItemActions');
var MenuItems = require('../data/menu');

class MenuItemService {
    getMenuItems() {
        MenuItemActions.gotMenuItems(MenuItems);
    }
}

module.exports = new MenuItemService();