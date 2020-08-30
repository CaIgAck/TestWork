export default {
  state: {
    nameOrganizator: null,
    number: null,
    eMail: null,
    citi: null,
    nameInfo: null,
    descriptionInfo: null,
    locationInfo: null,
    rankLocation: null,
    imgDataUrl: null
  },
  getters: {
    getDataNameOrganizator(state) {
      return state.nameOrganizator;
    },
    getDataNumber(state) {
      return state.number;
    },
    getDataEMail(state) {
      return state.eMail;
    },
    getDataCiti(state) {
      return state.citi;
    },
    getDataNameInfo(state) {
      return state.nameInfo;
    },
    getDataDescriptionInfo(state) {
      return state.descriptionInfo;
    },
    getDataLocationInfo(state) {
      return state.locationInfo;
    },
    getDataRankLocation(state) {
      return state.rankLocation;
    },
    getImgDataUrl(state) {
      return state.imgDataUrl;
    }
  },
  actions: {},
  mutations: {
    editDataState(state, { field, value }) {
      state[field] = value;
      console.log((state[field] = value));
    }
  }
};
