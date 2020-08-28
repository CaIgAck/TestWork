<template>
  <div>
    <div class="MainContentText">
      <h1 class="textHeader">Создать мероприятие</h1>
    </div>
    <div class="InformationOrganizer">
      <h3 class="SubTextContainer">Информация об организаторе</h3>
      <h4 class="nameTextLabel">Организатор</h4>
      <v-text-field
        outlined
        height="58"
        :value="getDataForm"
        @input="set('nameOrganizator', $event)"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoOrganizer",
  computed: {
    getDataForm: {
      get() {
        return this.$store.getters.getDataNameOrganizator;
      }
    }
  },
  methods: {
    set(newValue) {
      this.$store.commit("editDataState", {
        field: "nameOrganizator",
        value: newValue
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.MainContentText {
  margin-top: 123px;
  margin-bottom: 124px;
  .textHeader {
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    color: #351768;
  }
}
</style>
