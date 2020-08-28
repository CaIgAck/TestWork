<template>
  <div class="Form">
    <div class="CategoriesForm">
      <div class="CategoriesItem">
        <h4 class="nameTextLabel">Категория</h4>
        <v-select :items="itemsCategories" outlined></v-select>
      </div>
      <div class="CategoriesItem">
        <h4 class="nameTextLabel">Рейтинг мероприятия</h4>
        <v-select :items="itemsRanks" outlined></v-select>
      </div>
      <div class="CategoriesItem">
        <h4 class="nameTextLabel">Адрес мероприятия</h4>
        <v-text-field outlined height="58"></v-text-field>
      </div>
      <div class="CategoriesItem">
        <h4 class="nameTextLabel">Комментарий к адресу</h4>
        <v-text-field outlined height="58"></v-text-field>
      </div>
    </div>
    <div>
      <button class=" btnCategories">Отменить</button>
      <button class=" btnCategories">Далее</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      itemsCategories: ["обычное мероприятие", "необычное  мероприятие"],
      itemsRanks: ["0+", "6+", "16+"]
    };
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
