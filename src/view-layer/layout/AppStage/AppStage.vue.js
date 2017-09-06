import AppNavbar from "../../components/AppNavbar/AppNavbar";
import AppFooter from "../../components/AppFooter/AppFooter";

const AppStage = {
  name: "AppStage",
  components: {
    AppNavbar,
    AppFooter
  },
  data() {
    return {
      toolbar: true,
      theme: "default",
      pageTitle: ""
    };
  },
  computed: {},
  methods: {
    toggleSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    open(ref) {
      console.log("Opened: " + ref);
    },
    close(ref) {
      console.log("Closed: " + ref);
    }
  },
  mounted() {}
};

export default AppStage;
