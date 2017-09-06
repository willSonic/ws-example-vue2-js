import { mapGetters } from "vuex";

export default {
  name: "CollectionState",

  computed: {
     ...mapGetters({
        collections:"GarmentCollection/currentCollection"
     })
  }
};
