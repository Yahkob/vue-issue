import taxonomy from "@/api/taxonomy";

const state = {
  nodes: []
};

const actions = {
  async fetchParentNodes({ commit }) {
    commit("recieve_parent_nodes", await taxonomy.fetchParentNodes());
  },
  async fetchChildren({ commit, state }, id) {
    const nodeIndex = state.nodes.findIndex(node => node.categoryId === id);
    const childNodes = await taxonomy.fetchChildNodes(id);
    commit("recieve_child_nodes", { childNodes, nodeIndex });
  }
};

const mutations = {
  recieve_parent_nodes (state, nodes) {
    state.nodes = nodes.data.data;
  },
  recieve_child_nodes(state, payload) {
    const { childNodes, nodeIndex } = payload;
    state.nodes[nodeIndex].children = childNodes;
    state.nodes = [...state.nodes];
  }
};

export default {
  state,
  actions,
  mutations
};
