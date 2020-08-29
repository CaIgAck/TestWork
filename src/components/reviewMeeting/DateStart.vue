<template>
  <div>
    <div class="mainDatePicker" v-if="!displayMeetStart">
      <div class="BlockPicker">
        <v-menu
          v-model="fromDateMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              label="From Date"
              prepend-icon="event"
              readonly
              :value="fromDateDisp"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            locale="en-in"
            v-model="fromDateVal"
            no-title
            @input="fromDateMenu = false"
          ></v-date-picker>
        </v-menu>
        <!--        <v-menu-->
        <!--          v-model="fromDateMenuStart"-->
        <!--          :close-on-content-click="false"-->
        <!--          :nudge-right="40"-->
        <!--          lazy-->
        <!--          transition="scale-transition"-->
        <!--          max-width="290px"-->
        <!--          min-width="290px"-->
        <!--        >-->
        <!--          <template v-slot:activator="{ on }">-->
        <!--            <h4 class="nameTextLabel">Дата начала</h4>-->
        <!--            <v-text-field-->
        <!--              outlined-->
        <!--              readonly-->
        <!--              :value="fromDateDisp"-->
        <!--              v-on="on"-->
        <!--            ></v-text-field>-->
        <!--          </template>-->
        <!--          <v-date-picker-->
        <!--            locale="en-in"-->
        <!--            v-model="fromDateVal"-->
        <!--            no-title-->
        <!--            @input="fromDateMenu"-->
        <!--          ></v-date-picker>-->
        <!--        </v-menu>-->
      </div>
      <!--      <div>-->
      <!--        <v-menu-->
      <!--          v-model="fromTimeMenuStart"-->
      <!--          :close-on-content-click="false"-->
      <!--          :nudge-right="40"-->
      <!--          lazy-->
      <!--          transition="scale-transition"-->
      <!--          max-width="290px"-->
      <!--          min-width="290px"-->
      <!--        >-->
      <!--          <template v-slot:activator="{ on }">-->
      <!--            <h4 class="nameTextLabel">Время начала</h4>-->
      <!--            <v-text-field-->
      <!--              outlined-->
      <!--              readonly-->
      <!--              :value="fromDateDisp"-->
      <!--              v-on="on"-->
      <!--            ></v-text-field>-->
      <!--          </template>-->
      <!--          <v-time-picker-->
      <!--            locale="en-in"-->
      <!--            v-model="fromDateVal"-->
      <!--            @input="fromTimeMenuStart"-->
      <!--          ></v-time-picker>-->
      <!--        </v-menu>-->
      <!--      </div>-->
      <!--      <div class="line"></div>-->
      <!--      <div class="BlockPicker">-->
      <!--        <v-menu-->
      <!--          v-model="fromDateMenu"-->
      <!--          :close-on-content-click="false"-->
      <!--          :nudge-right="40"-->
      <!--          lazy-->
      <!--          transition="scale-transition"-->
      <!--          max-width="290px"-->
      <!--          min-width="290px"-->
      <!--        >-->
      <!--          <template v-slot:activator="{ on }">-->
      <!--            <h4 class="nameTextLabel">Дата конца</h4>-->
      <!--            <v-text-field-->
      <!--              outlined-->
      <!--              readonly-->
      <!--              :value="fromDateDisp"-->
      <!--              v-on="on"-->
      <!--            ></v-text-field>-->
      <!--          </template>-->
      <!--          <v-date-picker-->
      <!--            locale="en-in"-->
      <!--            v-model="fromDateVal"-->
      <!--            no-title-->
      <!--            @input="fromDateMenu"-->
      <!--          ></v-date-picker>-->
      <!--        </v-menu>-->
      <!--      </div>-->
      <!--      <div>-->
      <!--        <v-menu-->
      <!--          v-model="fromDateMenu"-->
      <!--          :close-on-content-click="false"-->
      <!--          :nudge-right="40"-->
      <!--          lazy-->
      <!--          transition="scale-transition"-->
      <!--          max-width="290px"-->
      <!--          min-width="290px"-->
      <!--        >-->
      <!--          <template v-slot:activator="{ on }">-->
      <!--            <h4 class="nameTextLabel">Время конца</h4>-->
      <!--            <v-text-field-->
      <!--              outlined-->
      <!--              readonly-->
      <!--              :value="fromDateDisp"-->
      <!--              v-on="on"-->
      <!--            ></v-text-field>-->
      <!--          </template>-->
      <!--          <v-date-picker-->
      <!--            locale="en-in"-->
      <!--            v-model="fromDateVal"-->
      <!--            no-title-->
      <!--            @input="fromDateMenu"-->
      <!--          ></v-date-picker>-->
      <!--        </v-menu>-->
      <!--      </div>-->
      <!--      <button class="btnFormDate" @click="displayContent">x</button>-->
    </div>
    <!--    <CreateDateStart />-->
  </div>
</template>

<script>
// import CreateDateStart from "@/components/reviewMeeting/CreateDateStart";
export default {
  name: "DateStart",
  // components: { CreateDateStart },
  data() {
    return {
      fromDateMenuStart: false,
      displayMeetStart: false,
      //   fromTimeMenuStart: false,
      fromDateMenu: false,
      fromDateVal: null
    };
  },
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
    }
  },
  methods: {
    displayContent() {
      this.displayMeetStart = true;
    }
  }
};
</script>

<style scoped>
.btnFormDate {
  background-color: #351767;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  color: white;
}
</style>
