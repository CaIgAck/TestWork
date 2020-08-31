export default {
  state: {
    datePickerValue: new Date(),
    timePickerValue: new Date(),
    datePickerValueEnd: new Date(),
    timePickerValueEnd: new Date(),
    dateAndTime: [
      {
        datePickerValue: new Date(),
        timePickerValue: new Date(),
        datePickerValueEnd: new Date(),
        timePickerValueEnd: new Date()
      }
    ]
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
    },
    getDateAndTime(state) {
      return state.dateAndTime;
    }
  },
  actions: {},
  mutations: {
    setDataPickerValue(state, { field, value }) {
      state[field] = value;
      console.log((state[field] = value));
    },
    addTimeAndDate(state) {
      state.dateAndTime.splice(0, 0, {
        datePickerValue: state.datePickerValue,
        timePickerValue: state.timePickerValue,
        datePickerValueEnd: state.datePickerValueEnd,
        timePickerValueEnd: state.timePickerValueEnd
      });
      (state.datePickerValue = new Date()),
        (state.timePickerValue = new Date()),
        (state.datePickerValueEnd = new Date()),
        (state.timePickerValueEnd = new Date());
    },
    deleteDateAndTime(state, index) {
      state.dateAndTime.splice(index, 1);
    }
  }
};
