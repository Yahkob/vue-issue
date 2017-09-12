
import Vuex from "vuex";
import Vue from "vue";
import taxonomy from "./modules/taxonomy";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    taxonomy
  }
});

export default store;
