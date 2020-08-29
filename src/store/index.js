import Vue from "vue";
import Vuex from "vuex";
import CreateMeeting from "@/store/CreateMeeting/CreateMeeting";
import RankMeeting from "@/store/Categories/RankMeeting";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    CreateMeeting,
    RankMeeting
  }
});
