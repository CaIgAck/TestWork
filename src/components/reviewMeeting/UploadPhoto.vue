<template>
  <div>
    <h4 class="nameTextLabel">Фотографии</h4>
    <div class="d-flex">
      <div class="btn upload mr-5" @click="toggleShow">
        <v-img
          class="ma-auto mt-8"
          :src="require('@/assets/photo.png')"
          height="65"
          width="80"
          @blur="$v.getDataUrl.$touch()"
          :error-messages="PhotoErrors"
        ></v-img>
      </div>
      <!--        @crop-upload-success="cropUploadSuccess"-->
      <!--        @crop-upload-fail="cropUploadFail"-->
      <myUpload
        field="img"
        @crop-success="editDataState"
        v-model="show"
        :width="150"
        :height="150"
        url="/upload"
        :params="params"
        :headers="headers"
        img-format="png"
        lang-type="ru"
      ></myUpload>
      <img :src="getDataUrl" alt="" />
      <button class="btnFormDate ml-n2 mt-n3" @click="editDataState(null)">
        <v-icon color="white">mdi-close</v-icon>
      </button>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import myUpload from "vue-image-crop-upload";
export default {
  name: "UploadPhoto",
  components: {
    myUpload
  },
  validations: {
    getDataUrl: {
      required
    }
  },
  data: function() {
    return {
      show: false,
      params: {
        token: "123456798",
        name: "avatar"
      },
      headers: {
        smail: "*_~"
      }
    };
  },
  computed: {
    getDataUrl() {
      return this.$store.getters.getImgDataUrl;
    },
    PhotoErrors() {
      const errors = [];
      if (!this.$v.getDataUrl.$dirty) return errors;
      !this.$v.getDataUrl.required && errors.push("Поле телефон обязательно");
      return errors;
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    // cropSuccess(imgDataUrl) {
    //   console.log("-------- crop success --------");
    //   this.imgDataUrl = imgDataUrl;
    // },
    editDataState(newValue) {
      return this.$store.commit("editDataState", {
        field: "imgDataUrl",
        value: newValue
      });
    }
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    // cropUploadSuccess(jsonData, field) {
    //   console.log("-------- upload success --------");
    //   console.log(jsonData);
    //   console.log("field: " + field);
    // },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    // cropUploadFail(status, field) {
    //   console.log("-------- upload fail --------");
    //   console.log(status);
    //   console.log("field: " + field);
    // }
  }
};
</script>

<style scoped>
.upload {
  width: 150px;
  height: 150px;
  border: 3px solid #9b63f8;
}
</style>
