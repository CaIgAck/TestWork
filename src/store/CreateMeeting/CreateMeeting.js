export default {
  state: {
    nameOrganizator: null,
    contactsData: {
      number: null,
      eMail: null,
      citi: null
    },
    nameInfo: null,
    descriptionInfo: null
  },
  getters: {
    getDataNameOrganizator(state) {
      return state.nameOrganizator;
    },
    getDataContactsData(state) {
      return state.contactsData;
    },
    getDataNameInfo(state) {
      return state.nameInfo;
    },
    getDataDescriptionInfo(state) {
      return state.descriptionInfo;
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
