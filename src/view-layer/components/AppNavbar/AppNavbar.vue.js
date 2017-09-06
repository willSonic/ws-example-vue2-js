export default {
  name: "AppNavbar",
  props: {
    sideToggle: Function,
    pageTitle: String
  },
  methods: {
    toggleLeftSidenav() {
      this.sideToggle();
    }
  },
  mounted() {
    document.title = this.pageTitle + " - Vue Material";
  }
};
