import Card from "../../components/card/Card";

export default {
  name: "StyleCollection",
  components: {
    Card
  },

  computed: {
    ...mapGetters(["collections"])
  },

  created() {
    this.setCollections();
  },

  methods: {
    setCollections() {
      this.fetchGarmentCollections();
    },
    fetchGarmentCollections() {
      this.$store.dispatch("fetchGarmentCollections", this.$route.query.id);
    }
  }
};
