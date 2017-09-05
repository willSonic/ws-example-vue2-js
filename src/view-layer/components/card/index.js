/**
 * Created by willstreeter on 8/30/17.
 */

export default {
  name: "Card",
  props: {
    msgClick: Function,
    title: String,
    message: String
  },

  methods: {
    handleButtonClick() {
      this.msgClick("ysdfdfolo");
      // this.$emit('cardButtonClicked', 'yolo')
      // 	EventBus.buttonChanged('yolo')
    }
  }
};
