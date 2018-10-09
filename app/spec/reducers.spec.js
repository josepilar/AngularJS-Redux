import {expect} from 'chai';
import {
    RETRIEVE_FAV_KITTIES
} from '../actions/posts.actions';
import reducer, {INITIAL_STATE} from '../reducers/posts.reducer';

describe('Kitty reducers...', () => {
    context('given that I\'m initializing the app', () => {
        it('Should return initial state', () => {
            const responseState = reducer(undefined, {});
            expect(responseState.currentKitty).to.eql({});
            expect(responseState.favs).to.eql([]);
            expect(responseState.favs.length).to.equal(0);
            expect(responseState.error).to.eql({});
            expect(responseState.isFetching).to.eql(false);
        });
    });

    context('RETRIEVE_FAV_KITTIES', () => {
       it('Should set isFetching to true on BEGIN', () => {
           const responseState = reducer(INITIAL_STATE, {
               type: RETRIEVE_FAV_KITTIES.BEGIN
           });

           expect(responseState.isFetching).to.be.true;
       });
        it('Should set isFetching and error on FAILURE', () => {
            const message = 'something went wrong';
            const responseState = reducer(INITIAL_STATE, {
                type: RETRIEVE_FAV_KITTIES.FAILURE,
                payload: {
                    code: 1,
                    message: message
                }
            });

            expect(responseState.isFetching).to.be.false;
            expect(responseState.error.code).to.be.equal(1);
            expect(responseState.error.message).to.be.equal(message);
        });

        it('Should set isFetching and favs on SUCCESS', () => {
            const fav = {
                id: 'fdsf23',
                url: 'http://something'
            };
            const responseState = reducer(INITIAL_STATE, {
                type: RETRIEVE_FAV_KITTIES.SUCCESS,
                payload: {
                    images: [
                        fav
                    ]
                }
            });

            expect(responseState.isFetching).to.be.false;
            expect(responseState.favs.length).to.be.equal(1);
            expect(responseState.favs[0]).to.be.eql(fav);
        });
    });
});