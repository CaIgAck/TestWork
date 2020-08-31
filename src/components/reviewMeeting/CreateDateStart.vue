<template>
  <div>
    <div v-for="(item, index) in getDateAndTime" :key="index">
      <div class="mainDatePicker" v-if="!displayMeetStart">
        <div class="BlockPicker">
          <h4 class="nameTextLabel">Дата начала</h4>
          <v-text-field
            outlined
            readonly
            :value="item.datePickerValue | momentEditDate(item.datePickerValue)"
            append-icon="mdi-calendar"
          ></v-text-field>
        </div>
        <div>
          <h4 class="nameTextLabel">Время начала</h4>
          <v-text-field
            outlined
            readonly
            :value="item.timePickerValue | momentEditTime(item.timePickerValue)"
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
            :value="
              item.datePickerValueEnd | momentEditDate(item.datePickerValueEnd)
            "
          ></v-text-field>
        </div>
        <div>
          <h4 class="nameTextLabel">Время конца</h4>
          <v-text-field
            outlined
            readonly
            append-icon="mdi-camera-timer"
            :value="
              item.timePickerValueEnd | momentEditTime(item.timePickerValueEnd)
            "
          ></v-text-field>
        </div>
        <button class="btnFormDate" @click="DeleteDateAndTime(index)">
          <v-icon color="white">mdi-close</v-icon>
        </button>
      </div>
    </div>
    <button class="btnForm" @click="addTimeAndDate">+ Добавить дату</button>
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
    };
  },
  filters: {
    momentEditDate(value) {
      return moment(value).format("MM-DD-YYYY");
    },
    momentEditTime(value) {
      return moment(value).format("hh:mm");
    }
  },
  computed: {
    getDateAndTime() {
      return this.$store.getters.getDateAndTime;
    }
  },
  methods: {
    displayContent() {
      this.displayMeetStart = true;
    },
    DeleteDateAndTime(index) {
      return this.$store.commit("deleteDateAndTime", index);
    },
    addTimeAndDate() {
      return this.$store.commit("addTimeAndDate");
    }
  }
};
</script>

<style scoped></style>
