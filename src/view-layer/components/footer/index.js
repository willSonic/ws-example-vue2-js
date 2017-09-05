let config = require("../../config.json");
export default {
  name: "Footer",
  data() {
    return {
      version: `${config.version}`,
      build: `${config.build}`
    };
  }
};
