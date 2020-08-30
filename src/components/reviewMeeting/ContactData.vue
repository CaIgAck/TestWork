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
            @blur="$v.getNumberData.$touch()"
            :error-messages="numberErrors"
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
            @blur="$v.getDataEMail.$touch()"
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
            @blur="$v.getCitiData.$touch()"
            :error-messages="citiErrors"
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
    getDataEMail: {
      required,
      minLength: minLength(8),
      email,
      maxLength: maxLength(30)
    },
    getNumberData: {
      required
    },
    getCitiData: {
      required
    }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.getDataEMail.$dirty) return errors;
      !this.$v.getDataEMail.required && errors.push("Поле e-mail обязательно");
      !this.$v.getDataEMail.email && errors.push("Не валидное поле");
      return errors;
    },
    numberErrors() {
      const errors = [];
      if (!this.$v.getNumberData.$dirty) return errors;
      !this.$v.getNumberData.required &&
        errors.push("Поле телефон обязательно");
      return errors;
    },
    citiErrors() {
      const errors = [];
      if (!this.$v.getCitiData.$dirty) return errors;
      !this.$v.getCitiData.required && errors.push("Поле телефон обязательно");
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
