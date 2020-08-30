<template>
  <div>
    <div class="InformationOrganizer">
      <h4 class="nameTextLabel">Подробное описание</h4>
      <v-textarea
        outlined
        height="193"
        :value="getDescriptionData"
        @input="set($event)"
        :counter="100"
        @blur="$v.getDescriptionData.$touch()"
        :error-messages="DescriptionErrors"
      ></v-textarea>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  name: "DetailedDescription",
  computed: {
    getDescriptionData: {
      get() {
        return this.$store.getters.getDataDescriptionInfo;
      }
    },
    DescriptionErrors() {
      const errors = [];
      if (!this.$v.getDescriptionData.$dirty) return errors;
      !this.$v.getDescriptionData.maxLength &&
        errors.push("не больше 100 символов");
      !this.$v.getDescriptionData.minLength && errors.push("от 4ех символов");
      !this.$v.getDescriptionData.required &&
        errors.push("Поле название обязательно");
      return errors;
    }
  },
  validations: {
    getDescriptionData: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(100)
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
