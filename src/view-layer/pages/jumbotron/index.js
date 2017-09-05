
import Vue from 'vue';
import Hello from "../../components/hello";

import "./jumbotron.scss";

let template = require("./jumbotron.vue");

@Component({
  mixins: [template],
  components: {
    Hello
  }
})
export default  Vue.extend({
  name:"Jumbotron"


});
