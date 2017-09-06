/**
 * Created by willstreeter on 9/4/17.
 */

import GC_MUTATION_TYPES from './gc.mutation.types'

const  GarmentCollectionMutations = {

    [GC_MUTATION_TYPES.GC_RESET](state) {
        state.collections = {};
        state.collectionIds = [];
        state.totalCollections = 0;
        state.selectedCollectionId = '';
    },

    [GC_MUTATION_TYPES.GC_APPEND](state, collection) {
        // console.log("fetchGarmentCollection collection =",  collection);
        const ids = state.collectionIds;
        ids.push(collection.id);
        state.collectionIds = [ ...ids ];
        state.collections = Object.assign({}, state.collections, {
              [collection.id]: collection.products
            });
        state.selectedCollectionId = collection.id;
    },

    [GC_MUTATION_TYPES.GC_TOTAL](state,totalCollections) {
        state.totalCollections = totalCollections;
    },

};


export default GarmentCollectionMutations;
