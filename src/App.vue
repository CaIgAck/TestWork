<template
  ><v-app class="content">
    <!--    <RootMeeting />-->
    <v-app>
      <v-main><router-view></router-view> </v-main>
    </v-app>
  </v-app>
</template>

<script>
// import RootMeeting from "@/components/reviewMeeting/RootMeeting";
export default {
  name: "App",
  // components: { RootMeeting },

  data: () => ({
    //
  })
};
</script>
<style lang="scss"></style>
