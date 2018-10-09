import {
    likeRandomKitty, 
    loadRandomKitty,
    loadFavKitties
 } from './actions/posts.actions';
import { 
    GetCurrenRandomKittySelector
 } from './app.selectors';
import './app.scss';


class AppController {
    constructor($ngRedux, $state) {
        Object.assign(this, {
            $ngRedux,
            $state
        });
    }

    $onInit() {
        this.controllerActions = {
            likeRandomKitty,
            loadRandomKitty,
            loadFavKitties
        };
        this.disconnectRedux = this.$ngRedux.connect(this.mapStateToTarget, this.controllerActions)((state, actions) => {
            this.state = state;
            this.actions = actions;
        });

        
        if (this.state.currentKitty && !this.state.currentKitty.url) {
            this.loadRandomKitty();
        }
    }

    mapStateToTarget(state) {
        return {
            currentKitty: GetCurrenRandomKittySelector(state)
        }
    }

    $onDestroy() {
        this.disconnectRedux();
    }

    loadRandomKitty() {
        this.actions.loadRandomKitty();
    }

    likeKitty() {
        this.actions.likeRandomKitty(this.state.currentKitty.id).then(() => {
            this.loadRandomKitty();
        });
    }
}

export default {
    template: require('./app.template.html'),
    controller: AppController,
    controllerAs: 'tinKittyCtrl'
}