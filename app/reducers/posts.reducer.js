import Immutable from 'seamless-immutable';
import {
    LIKE_RANDOM_KITTY,
    REMOVE_FAV_KITTY,
    RETRIEVE_FAV_KITTIES,
    RETRIEVE_RANDOM_KITTY
} from '../actions/posts.actions';

export const INITIAL_STATE = Immutable({
    currentKitty: {},
    favs: [],
    error: {},
    isFetching: false
});

export default function postReducer(state = INITIAL_STATE, {type = '', payload = {}}) {
    switch (type) {
        case RETRIEVE_RANDOM_KITTY.BEGIN:
        case LIKE_RANDOM_KITTY.BEGIN:
        case RETRIEVE_FAV_KITTIES.BEGIN:
        case REMOVE_FAV_KITTY.BEGIN:
            return state.set('isFetching', true);
        case RETRIEVE_RANDOM_KITTY.FAILURE:
        case LIKE_RANDOM_KITTY.FAILURE:
        case RETRIEVE_FAV_KITTIES.FAILURE:
        case REMOVE_FAV_KITTY.FAILURE:
            return state
                .set('error', payload)
                .set('isFetching', false);
        case RETRIEVE_RANDOM_KITTY.SUCCESS:
            return state
                .set('currentKitty', payload.image)
                .set('isFetching', false);
        case LIKE_RANDOM_KITTY.SUCCESS:
            return state
                .set('isFetching', false);
        case RETRIEVE_FAV_KITTIES.SUCCESS:
            return state
                .set('favs', payload.images)
                .set('isFetching', false);
        case REMOVE_FAV_KITTY.SUCCESS:
            return state
                .set('favs', payload)
                .set('isFetching', false);
        default:
            return state;
    }
}