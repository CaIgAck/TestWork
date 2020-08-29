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
        ></v-select>
      </div>
      <div class="CategoriesItem">
        <h4 class="nameTextLabel">Адрес мероприятия</h4>
        <v-text-field
          outlined
          height="58"
          :value="getLocation"
          @input="setLocation($event)"
        ></v-text-field>
      </div>
    </div>
    <div>
      <button class=" btnCategories">Отменить</button>
      <button class=" btnCategories" @click="nextPage">Далее</button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "Categories",
  data() {
    return {
      itemsCategories: ["обычное мероприятие", "необычное  мероприятие"]
    };
  },
  mounted() {
    this.$store.dispatch("getRankData");
  },
  computed: {
    getRank() {
      return this.$store.getters.Rank;
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
      router.push("/about");
    }
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
