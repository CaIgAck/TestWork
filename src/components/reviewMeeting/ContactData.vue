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
            :value="getContactData"
            @input="set('contactsData', $event)"
          ></v-text-field>
        </div>
        <div>
          <h4 class="nameTextLabel">E-mail</h4>
          <v-text-field
            outlined
            height="58"
            label="E-mail"
            class="textField"
          ></v-text-field>
        </div>
        <div>
          <h4 class="nameTextLabel">Город организатора</h4>
          <v-text-field
            outlined
            height="58"
            label="Город организатора"
            class="textField"
          ></v-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactData",
  computed: {
    getContactData: {
      get() {
        return this.$store.getters.getDataContactsData;
      }
    }
  },
  methods: {
    set(newValue) {
      return this.$store.commit("editDataState", {
        field: "contactsData",
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
