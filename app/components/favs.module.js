import angular from 'angular';
import FavsComponet from './favs.component'

export default angular.module('app.favs', [])
    .component('favsComponent', FavsComponet)
    .name;