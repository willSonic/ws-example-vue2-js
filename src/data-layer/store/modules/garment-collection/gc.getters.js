/**
 * Created by willstreeter on 9/4/17.
 */

const GarmentCollectionGetters = {
  collections: state => state.collections,
  collectionById: state => collectionId => state.collections[collectionId],
  totalCollections: state => state.totalCollections,
  selectedCollectionId: state => state.selectedCollectionId,
  currentCollection: state =>  state.collections[state.selectedCollectionId],
};

export default GarmentCollectionGetters;
