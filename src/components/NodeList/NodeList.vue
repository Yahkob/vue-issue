<template>
  <div class="node-list">
    <node 
      v-for="node in nodes"
      :node="node"
      :fetchChildren="fetchChildren"
      :key="node.id">
    </node>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import Node from "./Node.vue";
  export default {
    components: { Node },
    props: ["nodes"],
    name: "nodeList",
    methods: ({
      ...mapActions([
        "fetchChildren"
      ])
    })
  };
</script>

<style scoped>
  .node {
    background: #ffffff;
    padding: 10px;
    width: 50%;
    margin: 3px auto;
  }
</style>