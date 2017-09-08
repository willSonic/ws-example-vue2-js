/**
 * Created by willstreeter on 9/4/17.
 */

import GC_MUTATION_TYPES from './gc.mutation.types'

const  GarmentCollectionMutations = {


	  [GC_MUTATION_TYPES.GC_UPDATE_CURRENT_COLLECTION](state, collection) {
			   const updateCollection = state.collections[collection.id];
			   updateCollection.currentPage =collection.currentPage ;
			   state.collections = Object.assign({}, state.collections, {
												[collection.id]: updateCollection
											});
		},
    [GC_MUTATION_TYPES.GC_RESET](state) {
        state.collections = {};
        state.collectionIds = [];
        state.totalCollections = 0;
        state.selectedCollectionId = '';
    },

    [GC_MUTATION_TYPES.GC_APPEND](state, collection) {
        // console.log("fetchGarmentCollection collection =",  collection);
        // const ids = state.collectionIds;
        // ids.push(collection.id);
			//   console.log("fetchGarmentCollection collection =",  ids);
			 const collectionValue = state.collectionIds.find((item)=>{
					return item === collection.id
			});
			  if( !collectionValue){
					  state.collectionIds.push(collection.id)
				}
        state.collections = Object.assign({}, state.collections, {
              [collection.id]: collection
            });
        state.selectedCollectionId = collection.id;
    },

    [GC_MUTATION_TYPES.GC_TOTAL](state,totalCollections) {
        state.totalCollections = totalCollections;
    },

};


export default GarmentCollectionMutations;
