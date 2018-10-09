import ThunkHelper from '../utilities/thunkHelper';

export const RETRIEVE_RANDOM_KITTY = {
    BEGIN: 'LIKE_RANDOM_KITTY_BEGIN',
    SUCCESS: 'LIKE_RANDOM_KITTY_SUCCESS',
    FAILURE: 'LIKE_RANDOM_KITTY_FAILURE'
};

const RETRIEVE_RANDOM_KITTY_EVENTS = [
    RETRIEVE_RANDOM_KITTY.BEGIN,
    RETRIEVE_RANDOM_KITTY.SUCCESS,
    RETRIEVE_RANDOM_KITTY.FAILURE
];


export const loadRandomKitty = () => {
    return dispatch => {
        return ThunkHelper(dispatch, RETRIEVE_RANDOM_KITTY_EVENTS, {
            method: 'get',
            url: 'images'
        });
    }
};

export const LIKE_RANDOM_KITTY = {
    BEGIN: 'LIKE_RANDOM_KITTY_BEGIN',
    SUCCESS: 'LIKE_RANDOM_KITTY_SUCCESS',
    FAILURE: 'LIKE_RANDOM_KITTY_FAILURE'
};

const LIKE_RANDOM_KITTY_EVENTS = [
    LIKE_RANDOM_KITTY.BEGIN,
    LIKE_RANDOM_KITTY.SUCCESS,
    LIKE_RANDOM_KITTY.FAILURE
];


export const likeRandomKitty = (id) => {
    return dispatch => {
        return ThunkHelper(dispatch, LIKE_RANDOM_KITTY_EVENTS, {
            method: 'post',
            url: `images/fav/${id}`
        });
    }
};


export const RETRIEVE_FAV_KITTIES = {
    BEGIN: 'RETRIEVE_FAV_KITTIES_BEGIN',
    SUCCESS: 'RETRIEVE_FAV_KITTIES_SUCCESS',
    FAILURE: 'RETRIEVE_FAV_KITTIES_FAILURE'
};

const RETRIEVE_FAV_KITTIES_EVENTS = [
    RETRIEVE_FAV_KITTIES.BEGIN,
    RETRIEVE_FAV_KITTIES.SUCCESS,
    RETRIEVE_FAV_KITTIES.FAILURE
];


export const loadFavKitties = () => {
    return dispatch => {
        return ThunkHelper(dispatch, RETRIEVE_FAV_KITTIES_EVENTS, {
            method: 'get',
            url: 'images/fav'
        });
    }
};

export const REMOVE_FAV_KITTY = {
    BEGIN: 'REMOVE_FAV_KITTY_BEGIN',
    SUCCESS: 'REMOVE_FAV_KITTY_SUCCESS',
    FAILURE: 'REMOVE_FAV_KITTY_FAILURE'
};

const REMOVE_FAV_KITTY_EVENTS = [
    REMOVE_FAV_KITTY.BEGIN,
    REMOVE_FAV_KITTY.SUCCESS,
    REMOVE_FAV_KITTY.FAILURE
];


export const removeFavKitty = (id) => {
    return dispatch => {
        return ThunkHelper(dispatch, REMOVE_FAV_KITTY_EVENTS, {
            method: 'delete',
            url: `images/fav/${id}`
        });
    }
};

