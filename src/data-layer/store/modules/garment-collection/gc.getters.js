/**
 * Created by willstreeter on 9/4/17.
 */

const GarmentCollectionGetters = {
  collections: state => state.collections,
  collectionById: state => collectionId => state.collections[collectionId],
  totalCollections: state => state.totalCollections
};

export default GarmentCollectionGetters;
