'use strict';

var MENUITEMS_GET = require('../constants/AppConstants').MENUITEMS_GET;
var BaseStore = require('./BaseStore');
var MenuItems = require('../data/menu');

class MenuItemStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToAction.bind(this));
        this._menuItems = MenuItems;
    }

    _registerToAction(action) {
        switch (action.actionType) {
            case MENUITEMS_GET:
                this._menuItems = action.menuItems;
                this.emitChange();
                break;

            default:
                break;
        }
    }

    getMenuItems() {
        return this._menuItems;
    }
}

module.exports = new MenuItemStore();