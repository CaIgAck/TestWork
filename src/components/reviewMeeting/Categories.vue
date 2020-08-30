<template>
  <div class="Form">
    <div class="CategoriesForm">
      <div class="CategoriesItem">
        <h4 class="nameTextLabel">Рейтинг мероприятия</h4>
        <v-select
          outlined
          :items="getRank"
          @input="setRankLocation($event)"
          :value="getRankLocation"
          @blur="$v.getRankLocation.$touch()"
          :error-messages="RankErrors"
        ></v-select>
      </div>
      <div class="CategoriesItem">
        <h4 class="nameTextLabel">Адрес мероприятия</h4>
        <v-text-field
          outlined
          height="58"
          :value="getLocation"
          @input="setLocation($event)"
          @blur="$v.getLocation.$touch()"
          :error-messages="LocationErrors"
        ></v-text-field>
      </div>
    </div>
    <div>
      <button class=" btnCategories" @click="clearField">Отменить</button>
      <button class=" btnCategories" @click="nextPage">Далее</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";
import router from "@/router";
export default {
  name: "Categories",
  validations: {
    getLocation: {
      required
    },
    getRankLocation: {
      required
    }
  },
  mounted() {
    this.$store.dispatch("getRankData");
  },
  computed: {
    ...mapGetters({
      NameOrganizator: "getDataNameOrganizator",
      Number: "getDataNumber",
      EMail: "getDataEMail",
      Citi: "getDataCiti",
      NameInfo: "getDataNameInfo",
      DescriptionInfo: "getDataDescriptionInfo",
      PhotoUrl: "getImgDataUrl"
    }),
    getRank() {
      return this.$store.getters.Rank;
    },
    LocationErrors() {
      const errors = [];
      if (!this.$v.getLocation.$dirty) return errors;
      !this.$v.getLocation.required && errors.push("Поле название обязательно");
      return errors;
    },
    RankErrors() {
      const errors = [];
      if (!this.$v.getRankLocation.$dirty) return errors;
      !this.$v.getRankLocation.required &&
        errors.push("Поле название обязательно");
      return errors;
    },
    getLocation: {
      get() {
        return this.$store.getters.getDataLocationInfo;
      }
    },
    getRankLocation: {
      get() {
        return this.$store.getters.getDataRankLocation;
      }
    }
  },
  methods: {
    setLocation(newValue) {
      return this.$store.commit("editDataState", {
        field: "locationInfo",
        value: newValue
      });
    },
    setRankLocation(newValue) {
      return this.$store.commit("editDataState", {
        field: "rankLocation",
        value: newValue
      });
    },
    nextPage() {
      let NameOrganizator = this.NameOrganizator,
        Number = this.Number,
        EMail = this.EMail,
        Citi = this.Citi,
        NameInfo = this.NameInfo,
        DescriptionInfo = this.DescriptionInfo,
        RankLocation = this.getRankLocation,
        Location = this.getLocation,
        PhotoURL = this.PhotoUrl;

      if (
        NameOrganizator &&
        Number &&
        EMail &&
        Citi &&
        NameInfo &&
        DescriptionInfo &&
        RankLocation &&
        Location &&
        PhotoURL != null
      ) {
        router.push("/about");
      }
    },
    clearField() {}
  }
};
</script>

<style scoped lang="scss">
.Form {
  margin-bottom: 150px;
  .CategoriesForm {
    display: flex;
    flex-wrap: wrap;
    .CategoriesItem {
      flex-basis: 48%;
      margin-right: 15px;
    }
  }
}

.btnCategories {
  padding: 15px 80px;
  margin-right: 15px;
  font-weight: 600;
  color: #000000;
  border-radius: 4px;
  border: 1px solid #9b63f8;
  font-size: 16px;
  transition: 0.2s ease-out;
  transition-delay: 0.1s;
}
.btnCategories:hover {
  font-weight: 600;
  color: #ffffff;
  padding: 15px 80px;
  border-radius: 4px;
  border: 1px solid #9b63f8;
  background-color: #9b63f8;
  font-size: 16px;
}
</style>
