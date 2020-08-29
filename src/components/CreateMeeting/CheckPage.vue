<template>
  <div>
    <h1>Шаг 2</h1>
    <v-card class="px-6 py-3 d-flex align-center">
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
    <div class="d-flex justify-center">
      <div class="d-flex col-6">
        <div class="icon">{{ getRank }}</div>
        <div>
          <h1>{{ getNameInfo }}</h1>
          <div>
            <p>{{ getCiti }}</p>
            <p>дата</p>
            <p>время</p>
          </div>
          <div>
            <h4>Контакты</h4>
            <div>
              <p>{{ getNumber }}</p>
              <p>{{ getEmail }}</p>
            </div>
          </div>
          <div>
            <h5>{{ getNameOrganizator }}</h5>
          </div>
        </div>
      </div>
      <div class="col-6">
        <v-img
          src="data:image/jpeg;base64,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"
        ></v-img>
      </div>
    </div>
    <div>
      <p>{{ getDescription }}</p>
    </div>
  </div>
</template>

<script>
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
    }
  }
};
</script>

<style scoped></style>
