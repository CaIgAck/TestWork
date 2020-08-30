<template>
  <div>
    <h4 class="nameTextLabel">Фотографии</h4>
    <div class="d-flex">
      <div class="btn upload mr-5" @click="toggleShow">
        добавить фото
      </div>
      <myUpload
        field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
        :width="150"
        :height="150"
        url="/upload"
        :params="params"
        :headers="headers"
        img-format="png"
      ></myUpload>
      <img :src="imgDataUrl" alt="" />
      <button
        class="btnFormDate ml-n2 mt-n3"
        @click="displayContent"
        v-if="!imgDataUrl == ''"
      >
        <v-icon color="white">mdi-close</v-icon>
      </button>
    </div>
  </div>
</template>

<script>
import myUpload from "vue-image-crop-upload";
export default {
  name: "UploadPhoto",
  components: {
    myUpload
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
      },
      imgDataUrl: "" // the datebase64 url of created image
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    displayContent() {
      this.imgDataUrl = "";
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl) {
      console.log("-------- crop success --------");
      this.imgDataUrl = imgDataUrl;
    },
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      console.log(jsonData);
      console.log("field: " + field);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    }
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
