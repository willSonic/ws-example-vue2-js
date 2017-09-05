/**
 * Created by willstreeter on 9/4/17.
 */

import { GarmentCollectionState } from "./gc.state";
import { GarmentCollectionGetters } from "./gc.getters";
import { GarmentCollectionMutations } from "./gc.mutations";
import { GarmentCollectionActions } from "./gc.actions";

const GarmentCollection = {
  namespaced: true,
  state: GarmentCollectionState,
  getters: GarmentCollectionGetters,
  mutations: GarmentCollectionMutations,
  actions: GarmentCollectionActions
};

export default GarmentCollection;
