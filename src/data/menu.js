import CategoryList from '../components/CategoryList';
import Instructions from '../components/Instructions';
import About from '../components/About';
import TrolInfo from '../components/TrolInfo';

export default [
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