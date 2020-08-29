<template>
  <div>
    <!--    <Uploader v-model="fileList"></Uploader>-->
  </div>
</template>

<script>
// import Uploader from "vux-uploader-component";
// import axios from "axios";
export default {
  name: "UploadPhoto",
  component: {
    // Uploader
  },
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    // submit() {
    //   const formData = new FormData();
    //   formData.append("file", this.fileList[0].blob);
    //   axios
    //     .post(url, formData)
    //     .then(() => {})
    //     .catch(() => {});
    // }
  }
};
</script>

<style scoped></style>
