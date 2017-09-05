export default {
  name: "NavBar",
  methods: {
    onClickLogin() {
      console.log("$store =", this.$store);
      this.$store.dispatch("fetchGarmentCollection", {
        garmentType: "red+dress"
      });
    }
  }
};
