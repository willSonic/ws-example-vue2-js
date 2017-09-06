import AppNavbar from "../../components/AppNavbar/AppNavbar";
import StyleSelector from "../../components/StyleSelector/StyleSelector";
import CollectionState from "../../components/CollectionState/CollectionState";

const AppStage = {
  name: "AppStage",
  components: {
    AppNavbar,
    StyleSelector,
    CollectionState
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
    }
  },
  mounted() {}
};

export default AppStage;
