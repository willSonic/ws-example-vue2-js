
import Vue from 'vue';

import Jumbotron from "../jumbotron";


@Component({
  mixins: [template],
  components: {
    Jumbotron: Jumbotron
  }
})
export default Vue.extend ({
  name: "Home",


});
