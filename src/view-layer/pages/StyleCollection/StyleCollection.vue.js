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
      let garmentCollection = this.$store.getters["GarmentCollection/currentCollection"];
      console.log("styleCollection garmentCollection",garmentCollection);
      if(!garmentCollection){
          this.$router.push('/')
      }

      return garmentCollection;
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
