export default {
  state: {
    datePickerValue: null,
    timePickerValue: null,
    datePickerValueEnd: null,
    timePickerValueEnd: null
  },
  getters: {
    getDatePickerValue(state) {
      return state.datePickerValue;
    },
    getTimePickerValue(state) {
      return state.timePickerValue;
    },
    getDatePickerEnd(state) {
      return state.datePickerValueEnd;
    },
    getTimePickerEnd(state) {
      return state.timePickerValueEnd;
    }
  },
  actions: {},
  mutations: {
    setDataPickerValue(state, { field, value }) {
      state[field] = value;
      console.log((state[field] = value));
    }
  }
};
