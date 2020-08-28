<template>
  <div><InfoOrganizer /> <ContactData /> <GeneralInformation /></div>
</template>

<script>
import InfoOrganizer from "@/components/reviewMeeting/InfoOrganizer";
import ContactData from "@/components/reviewMeeting/ContactData";
import GeneralInformation from "@/components/reviewMeeting/GeneralInformation";

export default {
  name: "RootMeeting",
  components: {
    GeneralInformation,
    ContactData,
    InfoOrganizer
  }
};
</script>

<style scoped></style>
