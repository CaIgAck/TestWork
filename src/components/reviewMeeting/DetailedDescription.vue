<template>
  <div>
    <div class="InformationOrganizer">
      <h4 class="nameTextLabel">Подробное описание</h4>
      <v-textarea
        outlined
        height="193"
        :value="getDescriptionData"
        @input="set($event)"
      ></v-textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailedDescription",
  computed: {
    getDescriptionData: {
      get() {
        return this.$store.getters.getDataDescriptionInfo;
      }
    }
  },
  methods: {
    set(newValue) {
      this.$store.commit("editDataState", {
        field: "descriptionInfo",
        value: newValue
      });
    }
  }
};
</script>

<style scoped></style>
