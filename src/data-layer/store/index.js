/**
 * Created by willstreeter on 9/4/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import GarmentCollectionActions from './modules/garment-collection';
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    GarmentCollectionActions
  },
  strict: true

})
export default store