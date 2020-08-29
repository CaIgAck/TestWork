import axios from "axios";
export default {
  state: {
    Rank: null
  },
  getters: {
    Rank: state => state.Rank
  },
  actions: {
    getRankData(context) {
      axios
        .get("http://testwork.rdbx24.ru/api/")
        .then(result => {
          context.commit("editRankData", result.data);
        })
        .catch(error => {
          if (error.data.code !== 200) {
            console.log("что-то пошло не так");
          }
        });
    }
  },
  mutations: {
    editRankData(state, result) {
      state.Rank = result.result.map(item => {
        return item.title;
      });
    }
  }
};
