import axios from "axios";

export default {
  fetchParentNodes() {
    return axios.get("https://reqres.in/api/users?page=2");
  },
  fetchChildNodes() {
    return axios.get("https://reqres.in/api/users?page=2");
  }
};
