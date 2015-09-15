var CategoryList = require('../components/CategoryList');
var Instructions = require('../components/Instructions');
var About = require('../components/About');
var TrolInfo = require('../components/TrolInfo');

module.exports = [
    {
        id: 'SearchView'
    },
    {
        id: 'CategoryList',
        title: 'Laulut',
        component: CategoryList
    },
    {
        id: 'Instructions',
        title: 'Ohjeita',
        component: Instructions
    },
    {
        id: 'About',
        title: 'Profitti',
        component: About
    },
    {
        id: 'TrolInfo',
        title: 'TROL ry',
        component: TrolInfo
    }
];