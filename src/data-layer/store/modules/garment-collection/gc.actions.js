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

	updateCurrentPage({ commit}, payload){

		commit(GC_MUTATION_TYPES.GC_UPDATE_CURRENT_COLLECTION, payload);
	},



  async fetchGarmentCollection({ commit, state, getters }, payload) {
		const collectionValue = state.collectionIds.find((item)=>{
			return item === payload.selection;
		});
		console.log(' fetchGarmentCollection valueFound =', collectionValue)
    if(collectionValue && state.collections[collectionValue].products[(payload.page)]){
        const prevCollection = Object.assign({}, state.collections[payload.selection]);
        prevCollection.currentPage = payload.page;
			console.log('Why would you fetch')
			commit(GC_MUTATION_TYPES.GC_APPEND, prevCollection);
    }else{
			  const offSet=(payload.page-1);
			  const newCollection = await fetchStyleCollective(payload.selection,offSet );
			  const garments = createGarmentCollection(newCollection);
			  let garmentList;
			  if(collectionValue){
						garmentList= {
							id: payload.selection,
							isSelected: true,
							currentPage:payload.page,
							offset: newCollection.data.metadata.offset,
							limit: newCollection.data.metadata.limit,
							total: newCollection.data.metadata.total,
							category: newCollection.data.metadata.category,
							products: Object.assign({}, state.collections[payload.selection].products, {[payload.page]:garments})
						};

				}else{
					 garmentList= {
						 id: payload.selection,
						 isSelected: true,
						 currentPage:payload.page,
						 offset: newCollection.data.metadata.offset,
						 limit: newCollection.data.metadata.limit,
						 total: newCollection.data.metadata.total,
						 category: newCollection.data.metadata.category,
						 products: Object.assign({[payload.page]:garments})
					 };

				}
        commit(GC_MUTATION_TYPES.GC_APPEND, garmentList);
    }
  }
};

export default GarmentCollectionActions;
