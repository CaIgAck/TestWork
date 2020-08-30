<template>
  <div>
    <div class="InformationOrganizer">
      <h3 class="SubTextContainer">Общая информация</h3>
      <h4 class="nameTextLabel">Название</h4>
      <v-text-field
        outlined
        height="58"
        :value="GetInformation"
        @input="set($event)"
        @blur="$v.GetInformation.$touch()"
        :error-messages="NameGeneralErrors"
      ></v-text-field>
    </div>
    <UploadPhoto />
    <DetailedDescription />
    <DateStart />
    <Categories />
  </div>
</template>

<script>
import DetailedDescription from "@/components/reviewMeeting/DetailedDescription";
import DateStart from "@/components/reviewMeeting/DateStart";
import Categories from "@/components/reviewMeeting/Categories";
import UploadPhoto from "@/components/reviewMeeting/UploadPhoto";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  name: "GeneralInformation",
  components: { UploadPhoto, Categories, DateStart, DetailedDescription },
  validations: {
    GetInformation: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(10)
    }
  },
  computed: {
    NameGeneralErrors() {
      const errors = [];
      if (!this.$v.GetInformation.$dirty) return errors;
      !this.$v.GetInformation.maxLength && errors.push("не больше 10 символов");
      !this.$v.GetInformation.minLength && errors.push("от 4ех символов");
      !this.$v.GetInformation.required &&
        errors.push("Поле название обязательно");
      return errors;
    },
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
