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
              :value="fromDateDisp"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            locale="en-in"
            v-model="fromDateVal"
            no-title
            @input="fromDateMenu"
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
              :value="fromDateDisp"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            locale="en-in"
            v-model="fromDateVal"
            @input="fromTimeMenuStart"
          ></v-time-picker>
        </v-menu>
      </div>
      <div class="line"></div>
      <div class="BlockPicker">
        <v-menu
          v-model="fromDateMenu"
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
              :value="fromDateDisp"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            locale="en-in"
            v-model="fromDateVal"
            no-title
            @input="fromDateMenu"
          ></v-date-picker>
        </v-menu>
      </div>
      <div>
        <v-menu
          v-model="fromDateMenu"
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
              :value="fromDateDisp"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            locale="en-in"
            v-model="fromDateVal"
            no-title
            @input="fromDateMenu"
          ></v-date-picker>
        </v-menu>
      </div>
    </div>
    <button class="btnForm">+ Добавить дату</button>
  </div>
</template>

<script>
export default {
  name: "CreateDateStart",
  data() {
    return {
      fromDateMenuStart: false,
      displayMeetStart: false,
      fromTimeMenuStart: false,
      fromDateMenu: false,
      fromDateVal: null
    };
  },
  computed: {
    fromDateDisp() {
      return console.log(this.fromDateVal);
    }
  }
};
</script>

<style scoped></style>
