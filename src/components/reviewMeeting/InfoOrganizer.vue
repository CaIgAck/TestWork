<template>
  <div>
    <div class="MainContentText">
      <h1 class="textHeader">Шаг 1</h1>
    </div>
    <div class="InformationOrganizer">
      <h3 class="SubTextContainer">Информация об организаторе</h3>
      <h4 class="nameTextLabel">Организатор</h4>
      <v-text-field
        outlined
        height="58"
        :value="getDataForm"
        @input="set($event)"
        @blur="$v.getDataForm.$touch()"
        :error-messages="getDataFormErrors"
      ></v-text-field>
      <!--      <div class="errorValid" v-if="!$v.getDataForm.required">-->
      <!--        Field is required-->
      <!--      </div>-->
      <!--      <div class="errorValid" v-if="!$v.getDataForm.minLength">-->
      <!--        Name must have at least-->
      <!--        {{ $v.getDataForm.$params.minLength.min }} letters.-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "InfoOrganizer",
  validations: {
    getDataForm: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(10)
    }
  },
  computed: {
    getDataForm: {
      get() {
        return this.$store.getters.getDataNameOrganizator;
      }
    },
    getDataFormErrors() {
      const errors = [];
      if (!this.$v.getDataForm.$dirty) return errors;
      !this.$v.getDataForm.maxLength && errors.push("не больше 10 символов");
      !this.$v.getDataForm.minLength && errors.push("от 4ех символов");
      !this.$v.getDataForm.required &&
        errors.push("Поле организатор обязательно");
      return errors;
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

<style lang="scss" scoped></style>
