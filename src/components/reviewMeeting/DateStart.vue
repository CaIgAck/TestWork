<template>
  <div>
    <div class="mainDatePicker" v-if="!displayMeetStart">
      <div class="BlockPicker">
        <v-menu
          v-model="fromDateMenuStart"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <h4 class="nameTextLabel">Дата начала</h4>
            <v-text-field
              outlined
              readonly
              :value="getDatePicker"
              v-on="on"
              append-icon="mdi-calendar"
            >
            </v-text-field>
          </template>
          <v-date-picker
            locale="en-in"
            no-title
            :value="getDatePicker"
            @input="setPicker('datePickerValue', $event)"
            @click="fromDateMenu"
          ></v-date-picker>
        </v-menu>
      </div>
      <div>
        <v-menu
          v-model="fromTimeMenuStart"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <h4 class="nameTextLabel">Время начала</h4>
            <v-text-field
              outlined
              readonly
              v-on="on"
              :value="getTimePicker"
              append-icon="mdi-camera-timer"
            ></v-text-field>
          </template>
          <v-time-picker
            locale="en-in"
            :value="getTimePicker"
            @input="setPicker('timePickerValue', $event)"
            @click="fromTimeMenuStart"
          ></v-time-picker>
        </v-menu>
      </div>
      <div class="line"></div>
      <div class="BlockPicker">
        <v-menu
          v-model="fromDateMenuEnd"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <h4 class="nameTextLabel">Дата конца</h4>
            <v-text-field
              outlined
              readonly
              :value="getDatePickerEnd"
              v-on="on"
              append-icon="mdi-calendar"
            ></v-text-field>
          </template>
          <v-date-picker
            locale="en-in"
            :value="getDatePickerEnd"
            @input="setPicker('datePickerValueEnd', $event)"
            @click="fromDateMenuEnd"
          ></v-date-picker>
        </v-menu>
      </div>
      <div>
        <v-menu
          v-model="fromTimeMenuEnd"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <h4 class="nameTextLabel">Время конца</h4>
            <v-text-field
              outlined
              readonly
              :value="getTimePickerEnd"
              v-on="on"
              append-icon="mdi-camera-timer"
            ></v-text-field>
          </template>
          <v-time-picker
            locale="en-in"
            :value="getTimePickerEnd"
            @input="setPicker('timePickerValueEnd', $event)"
            @click="fromTimeMenuEnd"
          ></v-time-picker>
        </v-menu>
      </div>
      <button class="btnFormDate" @click="displayContent">
        <v-icon color="white">mdi-close</v-icon>
      </button>
    </div>
    <CreateDateStart />

    <button class="btnForm" @click="addTimeAndDate">+ Добавить дату</button>
  </div>
</template>

<script>
import CreateDateStart from "@/components/reviewMeeting/CreateDateStart";
export default {
  name: "DateStart",
  components: { CreateDateStart },
  data() {
    return {
      fromDateMenuStart: false,
      fromDateMenuEnd: false,
      fromTimeMenuStart: false,
      fromTimeMenuEnd: false,
      displayMeetStart: false,
      fromDateMenu: false,
      fromDateVal: null
    };
  },
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
    },
    getDatePicker() {
      return this.$store.getters.getDatePickerValue;
    },
    getTimePicker() {
      return this.$store.getters.getTimePickerValue;
    },
    getDatePickerEnd() {
      return this.$store.getters.getDatePickerEnd;
    },
    getTimePickerEnd() {
      return this.$store.getters.getTimePickerEnd;
    }
  },
  methods: {
    displayContent() {
      this.displayMeetStart = true;
    },
    setPicker(field, newValue) {
      this.$store.commit("setDataPickerValue", {
        field: field,
        value: newValue
      });
    },
    addTimeAndDate() {
      return this.$store.commit("addTimeAndDate");
    }
  }
};
</script>

<style scoped></style>
