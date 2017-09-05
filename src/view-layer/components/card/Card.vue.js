/**
 * Created by willstreeter on 8/30/17.
 */

import Vue from 'vue';
import  EventBus  from '../../../../business/event-bus';

 export default  Vue.extend ({
  name: "Card",
  props:{
      msgClick:Function,
      title:String,
      message:String
  },

  methods: {
    handleButtonClick(){
			this.msgClick('ysdfdfolo');
      this.$emit('cardButtonClicked', 'yolo')
			EventBus.buttonChanged('yolo')
    }
  },

});
