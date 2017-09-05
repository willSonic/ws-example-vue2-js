/**
 * Created by willstreeter on 9/4/17.
 */

import GC_MUTATION_TYPES  from './gc.mutation.types'
import  fetchStyleCollective from '../../../api/style.collective.api';

const  GarmentCollectionActions = {
  async fetchGarmentCollection( { commit }, payload ) {
        const newCollection =  await fetchStyleCollective(payload.garmentType);
       // console.log("fetchGarmentCollection garmentList =", newCollection);
		   const garments = newCollection.data.products.map( (product) => {
               return  {
                      id: product.id,
                      name: product.name,
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
        });
        const garmentList = {
                              id: payload.garmentType,
                              isSelected: true,
                              offset: newCollection.data.metadata.offset,
                              limit: newCollection.data.metadata.limit,
                              total: newCollection.data.metadata.total,
                              category: newCollection.data.metadata.category,
                              products: garments
                          };
        // console.log("fetchGarmentCollection garmentList =", garmentList);
        commit(GC_MUTATION_TYPES.GC_APPEND, garmentList);
  }
};



export default GarmentCollectionActions;
