import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';
import favsComp from './components/favs.module';

import AppComponent from './app.component';
import config from './app.config';

export default angular.module('app', [
    uiRouter,
    ngRedux,
    ngReduxUiRouter,
    favsComp
])
    .config(config)
    .component('app', AppComponent)
    .name;