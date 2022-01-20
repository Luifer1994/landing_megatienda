<template>
  <steps></steps>
  <banner-info></banner-info>
  <services></services>
</template>

<script>
import BannerInfo from "../components/BannerInfo.vue";
import Services from "../components/Services.vue";
import Steps from "../components/Steps.vue";

export default {
  name: "Home",
  components: {
    Steps,
    BannerInfo,
    Services,
  }
};
</script>
