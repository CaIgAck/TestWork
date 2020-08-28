<template>
  <div>
    <div class="InformationOrganizer">
      <h3 class="SubTextContainer">Общая информация</h3>
      <h4 class="nameTextLabel">Название</h4>
      <v-text-field
        outlined
        height="58"
        :value="GetInformation"
        @input="set('nameInfo', $event)"
      ></v-text-field>
    </div>
    <DetailedDescription />
    <DateStart />
    <Categories />
  </div>
</template>

<script>
import DetailedDescription from "@/components/reviewMeeting/DetailedDescription";
import DateStart from "@/components/reviewMeeting/DateStart";
import Categories from "@/components/reviewMeeting/Categories";
export default {
  name: "GeneralInformation",
  components: { Categories, DateStart, DetailedDescription },
  computed: {
    GetInformation: {
      get() {
        return this.$store.getters.getDataNameInfo;
      }
    }
  },
  methods: {
    set(newValue) {
      return this.$store.commit("editDataState", {
        field: "nameInfo",
        value: newValue
      });
    }
  }
};
</script>

<style scoped></style>
