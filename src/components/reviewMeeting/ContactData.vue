<template>
  <div>
    <div class="ContactsData">
      <h3 class="SubTextContainer">Контактные данные</h3>
      <div class="contacts">
        <div>
          <h4 class="nameTextLabel">Телефон</h4>
          <v-text-field
            outlined
            height="58"
            label="Телефон"
            class="textField"
            v-mask="['+7 (###) ###-##-##']"
            :value="getNumberData"
            @input="setNumber($event)"
          ></v-text-field>
        </div>
        <div>
          <h4 class="nameTextLabel">E-mail</h4>
          <v-text-field
            outlined
            height="58"
            label="E-mail"
            class="textField"
            :value="getDataEMail"
            @input="setEmail($event)"
            v-model.trim="$v.email.$model"
            @blur="$v.email.$touch()"
            :error-messages="emailErrors"
          ></v-text-field>
        </div>
        <div>
          <h4 class="nameTextLabel">Город организатора</h4>
          <v-text-field
            outlined
            height="58"
            label="Город организатора"
            class="textField"
            :value="getCitiData"
            @input="setCiti($event)"
          ></v-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  email,
  maxLength
} from "vuelidate/lib/validators";
import { mask } from "vue-the-mask";
export default {
  name: "ContactData",
  directives: { mask },
  validations: {
    email: {
      required,
      minLength: minLength(8),
      email,
      maxLength: maxLength(30)
    }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push("Поле e-mail обязательно");
      !this.$v.email.email && errors.push("Не валидное поле");
      return errors;
    },
    getNumberData: {
      get() {
        return this.$store.getters.getDataNumber;
      }
    },
    getDataEMail: {
      get() {
        return this.$store.getters.getDataEMail;
      }
    },
    getCitiData: {
      get() {
        return this.$store.getters.getDataCiti;
      }
    }
  },
  methods: {
    setNumber(newValue) {
      return this.$store.commit("editDataState", {
        field: "number",
        value: newValue
      });
    },
    setCiti(newValue) {
      return this.$store.commit("editDataState", {
        field: "citi",
        value: newValue
      });
    },
    setEmail(newValue) {
      return this.$store.commit("editDataState", {
        field: "eMail",
        value: newValue
      });
    }
  }
};
</script>

<style scoped>
.contacts {
  display: flex;
  justify-content: space-between;
}
.textField {
  width: 367px;
}
</style>
