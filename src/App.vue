<template
  ><v-app class="content">
    <RootMeeting />
  </v-app>
</template>

<script>
import RootMeeting from "@/components/reviewMeeting/RootMeeting";
export default {
  name: "App",
  components: { RootMeeting },

  data: () => ({
    //
  })
};
</script>
<style lang="scss"></style>
