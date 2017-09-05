/**
 * Created by willstreeter on 9/4/17.
 */

import {GC_MUTATION_TYPES } from './gc.mutation.types'

const  GarmentCollectionMutations = {

    [GC_MUTATION_TYPES.GC_RESET](state) {
        state.collections = {};
        state.collectionIds = [];
        state.totalCollections = 0;
    },

    [GC_MUTATION_TYPES.GC_APPEND](state, collection) {
        console.log("fetchGarmentCollection collection =",  collection);
        let ids = state.collectionIds;
        ids.push(collection.id);
        state.collectionIds = [ ...ids ];
        state.collections = Object.assign({}, state.collections, {
              [collection.id]: collection.products
            });
    },

    [GC_MUTATION_TYPES.GC_RESET](state,totalCollections) {
        state.totalCollections = totalCollections;
    },

};


export default GarmentCollectionMutations;
