import Vue from "vue";
import Router from "vue-router";
import NodeList from "@/components/Taxonomy";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Taxonomy",
      component: NodeList
    }
  ]
});
