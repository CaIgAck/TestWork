<template>
  <div class="mt-12">
    <h1 class="textHeader mb-12">Шаг 2</h1>
    <v-card class="px-6 py-3 d-flex align-center mb-12">
      <div class="mr-5">
        <v-img
          :src="require('@/assets/warning.png')"
          width="45"
          height="45"
        ></v-img>
      </div>
      <div>
        <strong>
          Проверьте ваше мероприятие на наличие ошибок, если все в порядке -
          отправляйте на модерацию.
        </strong>
      </div>
    </v-card>
    <div class="d-flex justify-center mt-5 align-start">
      <div class="d-flex col-6">
        <div class="icon mr-4 pr-3 mt-6">
          <p class="rank">{{ getRank }}</p>
        </div>
        <div>
          <h1 class="textHeader widthText">
            {{ getNameInfo }}
          </h1>
          <div>
            <p class="textChekPage widthText">
              <v-icon color="#9B63F8">mdi-map-marker</v-icon> {{ getCiti }}
            </p>
            <div v-for="(item, index) in getDateAndTime" :key="index">
              <p class="textChekPage widthText">
                <v-icon color="#9B63F8">mdi-calendar</v-icon>
                {{ item.getDateStart | momentEditDate(item.getDateStart) }} -
                {{ getDateEnd | momentEditDate(getDateEnd) }}
              </p>
              <p class="textChekPage widthText">
                <v-icon color="#9B63F8">mdi-camera-timer</v-icon>
                {{ item.getTimeStart | momentEditTime(item.getTimeStart) }} -
                {{ item.getTimeEnd | momentEditTime(item.getTimeEnd) }}
              </p>
            </div>
          </div>
          <div>
            <h4 class="subHeaderCheckPage">Контакты</h4>
            <div>
              <p class="textChekPage widthText">
                <v-icon color="#9B63F8">mdi-phone</v-icon> {{ getNumber }}
              </p>
              <p class="textChekPage widthText">
                <v-icon color="#9B63F8">mdi-email</v-icon> {{ getEmail }}
              </p>
            </div>
          </div>
          <div>
            <h5 class="subHeaderCheckPage widthText">
              {{ getNameOrganizator }}
            </h5>
            <p class="textChekPage">Организатор мероприятия</p>
          </div>
        </div>
      </div>
      <div class="col-6 mt-5">
        <v-img :src="`${getDataUrl}`" width="630" height="420"> </v-img>
      </div>
    </div>
    <div>
      <p class="textDescription">{{ getDescription }}</p>
    </div>
    <button class="btnCategories" @click="goBack">Назад</button>
    <button class="btnCategories">Отправить на модерацию</button>
  </div>
</template>

<script>
import router from "@/router";
import moment from "moment";
export default {
  name: "CheckPage",
  computed: {
    getNameOrganizator() {
      return this.$store.getters.getDataNameOrganizator;
    },
    getNameInfo() {
      return this.$store.getters.getDataNameInfo;
    },
    getNumber() {
      return this.$store.getters.getDataNumber;
    },
    getEmail() {
      return this.$store.getters.getDataEMail;
    },
    getCiti() {
      return this.$store.getters.getDataCiti;
    },
    getRank() {
      return this.$store.getters.getDataRankLocation;
    },
    getDescription() {
      return this.$store.getters.getDataDescriptionInfo;
    },
    getDateStart() {
      return this.$store.getters.getDatePickerValue;
    },
    getDateEnd() {
      return this.$store.getters.getDatePickerEnd;
    },
    getTimeStart() {
      return this.$store.getters.getTimePickerValue;
    },
    getTimeEnd() {
      return this.$store.getters.getTimePickerEnd;
    },
    getDataUrl() {
      return this.$store.getters.getImgDataUrl;
    },
    getDateAndTime() {
      return this.$store.getters.getDateAndTime;
    }
  },
  filters: {
    momentEditDate(value) {
      return moment(value).format("MMM-DD");
    },
    momentEditTime(value) {
      return moment(value).format("hh:mm");
    }
  },
  methods: {
    goBack() {
      router.push("/");
    }
  }
};
</script>

<style scoped lang="scss">
.icon {
  width: 48px;
  height: 48px;
  background-color: #351768;
  .rank {
    margin: 10px 0 0 13px;
    font-style: normal;
    color: #ffff;
    font-weight: 600;
    font-size: 18px;
  }
}
.widthText {
  width: 500px;
  word-wrap: break-word;
}
</style>
