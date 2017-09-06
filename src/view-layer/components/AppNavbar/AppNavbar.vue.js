export default {
  name: "AppNavbar",
  props: {
    sideToggle: Function,
    pageTitle: String
  },
  methods: {
    toggleLeftSidenav() {
      this.sideToggle();
    },
    onClickLogin() {
      console.log("$store =", this.$store);
      this.$store
        .dispatch("GarmentCollection/fetchGarmentCollection", {
          selection: "red+dress",
          page: 1
        })
        .then(() => {
          this.$router.push({
            path: "stylecollection",
            query: { selection: "red+dress", page: 1 }
          });
        });
    }
  },
  mounted() {
    document.title = this.pageTitle + " - Vue Material";
  }
};
