<template>
  <div>
    <node-list
      :nodes="nodes"
    ></node-list>
  </div>
</template>

<script>
  import NodeList from "./NodeList/NodeList.vue";
  import { mapState, mapActions } from "vuex";
  export default {
    components: { NodeList },
    name: "taxonomy",
    created () {
      if (!this.nodes.length) {
        this.fetchParentNodes();
      }
    },
    computed: mapState({
      nodes: state => state.taxonomy.nodes
    }),
    methods: ({
      ...mapActions([
        "fetchParentNodes"
      ])
    })
  };
</script>
