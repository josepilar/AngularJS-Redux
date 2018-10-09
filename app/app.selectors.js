import {createSelector} from 'reselect';

const GetPostsState = state => state.posts;

export const GetCurrenRandomKittySelector = createSelector(
    [GetPostsState],
    (store) => {
        return store.currentKitty;
    }
);

export const GetKittyFavsSelector = createSelector(
    [GetPostsState],
    (store) => {
        return store.favs;
    }
);