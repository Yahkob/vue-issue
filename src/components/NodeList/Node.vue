<template>
  <div>
    <div class="node">
      <div @click="onExpand" class="expand">
        <i :class="{
          'fa': true,
          'fa-caret-right': !expanded,
          'fa-caret-down': expanded
        }"></i>
      </div>
      <span class="name">
        {{node.first_name}}
      </span>
    </div>
    <div v-if="showChildren">
      <node-list
        :nodes="childNodes"
      ></node-list>
    </div>
  </div>
</template>

<script>
  import NodeList from "./NodeList.vue";
  export default {
    components: { NodeList },
    props: ["node", "fetchChildren"],
    name: "node",
    data () {
      return {
        expanded: false
      };
    },
    methods: {
      onExpand () {
        this.expanded = !this.expanded;
        if (!this.node.children) {
          this.fetchChildren(this.node.categoryId);
        }
      }
    },
    computed: {
      childNodes() {
        return this.$store.state.taxonomy.nodes.find(node => this.node.id === node.id).children;
      },
      showChildren() {
        return this.expanded && this.childNodes;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .node {
    background: #ffffff;
    padding: 10px;
    width: 50%;
    margin: 3px auto;
    .type {
      margin-right: 5px;
    }
    .name {
      cursor: pointer;
    }
    .expand {
      display: inline-block;
      text-align: center;
      width: 20px;
      cursor: pointer;
    }
  }
</style>