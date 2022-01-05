// *组件
import DesignForm from "./views/home.vue";

// *vuex的store文件
import common from "./store/index";

// import './assets/css/config.styl'
// import './assets/css/widget.styl'
// import './assets/css/themes.styl'
// import './assets/css/index.styl'

import ref from 'vue-ref'
const install = function (Vue, opts = {}) {
  if (!opts.store) {
    console.log("Please provide a store!");
  }
  opts.store.registerModule("common", common);
  Vue.component(DesignForm.name, DesignForm);
  Vue.use(ref, { name: "ant-ref" });
};

export default { install, DesignForm };