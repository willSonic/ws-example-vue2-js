/**
 * Created by willstreeter on 9/4/17.
 */

import GC_MUTATION_TYPES from "./gc.mutation.types";
import fetchStyleCollective from "../../../api/style.collective.api";



const createGarmentCollection = (garmentCollection)=>{
      return garmentCollection.data.products.map(product => {
           return {
                id: product.id,
                fullName: product.fullName,
                currency: product.currency,
                price: product.price,
                inStock: product.inStock,
                description: product.description,
                stock: product.stock,
                image: product.image,
                colors: product.colors,
                sizes: product.sizes,
                categories: product.categories
              }
       })
};


const GarmentCollectionActions = {
  async fetchGarmentCollection({ commit, state }, payload) {
    const newCollection = await fetchStyleCollective(payload.selection);
    console.log("this.$store.state =", state);
    const garments = createGarmentCollection(newCollection);
    if(state.collectionIds['payload.selection']){
        const prevCollection = Object.assign({}, state.collectionIds['payload.selection']);
        prevCollection.currentPage = payload.page;
        prevCollection.products[payload.page] =garments;
        commit(GC_MUTATION_TYPES.GC_APPEND, prevCollection);
    }else{
       const garmentList = {
        id: payload.selection,
        isSelected: true,
        currentPage:payload.page,
        offset: newCollection.data.metadata.offset,
        limit: newCollection.data.metadata.limit,
        total: newCollection.data.metadata.total,
        category: newCollection.data.metadata.category,
        products: [payload.page]=garments
      };
      commit(GC_MUTATION_TYPES.GC_APPEND, garmentList);
    }
  }
};

export default GarmentCollectionActions;
