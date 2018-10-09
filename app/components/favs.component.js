import {
    loadFavKitties,
    removeFavKitty
} from '../actions/posts.actions';
import {
    GetKittyFavsSelector
} from '../app.selectors';
import './favs.styles.scss';

class FavsComponent{

    constructor($ngRedux, $state) {
        Object.assign(this, {
            $ngRedux,
            $state
        })
    }

    $onInit() {
        this.controllerActions = {
            loadFavKitties,
            removeFavKitty
        };
        this.disconnectRedux = this.$ngRedux.connect(this.mapStateToTarget, this.controllerActions)((state, actions) => {
            this.state = state;
            this.actions = actions;
        });

        this.actions.loadFavKitties();
    }

    mapStateToTarget(state) {
        return {
            favs: GetKittyFavsSelector(state)
        }
    }

    $onDestroy() {
        this.disconnectRedux();
    }

    removeFav(kittyId) {
        this.actions.removeFavKitty(kittyId).then(() => {
            this.actions.loadFavKitties();
        }).catch(() => {
            //here we can read redux for the error returned and show a toast or something.
        });
    }

}

export default {
    template: require('./favs.template.html'),
    controller: FavsComponent,
    controllerAs: 'favsCtrl'
}