<template>
  <div class="container wow fadeInUp">
    <h3 class="text-primary">Términos y condiciones</h3>
    <br />
    <div v-html="terAndConditions"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "TermsAndConditions",
  data() {
    return {
      urlApi: process.env.VUE_APP_URL_API_ADMIN,
      terAndConditions: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const res = await axios.get(this.urlApi + "term-and-condition-view");
        this.terAndConditions = res.data.data.content;
      } catch (error) {
        console.log(error.response);
      }
    },
  },
};
</script>