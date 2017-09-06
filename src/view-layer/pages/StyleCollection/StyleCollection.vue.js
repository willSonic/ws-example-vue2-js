import { mapGetters } from "vuex";
import Card from "../../components/Card/Card";

export default {
  name: "StyleCollection",
  components: {
    Card
  },

  computed: {
    // ...mapGetters({
    //    collections:"GarmentCollection/collections"
    // })
    styleCollection() {
      console.log("styleCollection store", this.$store);
      let something = this.$store.getters["GarmentCollection/collectionById"](
        "red+dress"
      );
      console.log("styleCollection  something =", something);

      return something;
    }
  },

  created() {
    this.setCollections();
  },

  methods: {
    setCollections() {
      this.fetchGarmentCollections();
    },
    fetchGarmentCollections() {
      //this.$store.dispatch("fetchGarmentCollections", this.$route.query.id);
    }
  }
};
