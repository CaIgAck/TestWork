<template>
  <div>
    <div v-for="(item, index) in getDateAndTime" :key="index">
      <div class="mainDatePicker" v-if="!displayMeetStart">
        <div class="BlockPicker">
          <h4 class="nameTextLabel">Дата начала</h4>
          <v-text-field
            outlined
            readonly
            :value="item.datePickerValue | momentEditDate"
            append-icon="mdi-calendar"
          ></v-text-field>
        </div>
        <div>
          <h4 class="nameTextLabel">Время начала</h4>
          <v-text-field
            outlined
            readonly
            :value="item.timePickerValue | momentEditDate"
            append-icon="mdi-camera-timer"
          ></v-text-field>
        </div>
        <div class="line"></div>
        <div class="BlockPicker">
          <h4 class="nameTextLabel">Дата конца</h4>
          <v-text-field
            outlined
            readonly
            append-icon="mdi-calendar"
            :value="item.datePickerValueEnd | momentEditDate"
          ></v-text-field>
        </div>
        <div>
          <h4 class="nameTextLabel">Время конца</h4>
          <v-text-field
            outlined
            readonly
            append-icon="mdi-camera-timer"
            :value="item.timePickerValueEnd | momentEditDate"
          ></v-text-field>
        </div>
        <button class="btnFormDate" @click="displayContent">
          <v-icon color="white">mdi-close</v-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "CreateDateStart",
  data() {
    return {
      fromDateMenuStart: false,
      fromDateMenuEnd: false,
      fromTimeMenuStart: false,
      fromTimeMenuEnd: false,
      displayMeetStart: false,
      fromDateMenu: false,
      fromDateVal: null
      // date: parseISO(new Date().toISOString().substr(0, 10))
    };
  },
  filters: {
    momentEditDate() {
      return moment(this.date).format("dddd, MMMM Do YYYY");
    }
  },
  computed: {
    getDateAndTime() {
      return this.$store.getters.getDateAndTime;
    }
    // computedDateFormattedMomentjs() {
    //   return moment(this.date).format("dddd, MMMM Do YYYY") : "";
    // }
  },
  methods: {
    displayContent() {
      this.displayMeetStart = true;
    }
  }
};
</script>

<style scoped></style>
