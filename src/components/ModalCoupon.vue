<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Registrar cupón</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Ingresa tu identificación"
            v-model="document"
          />

          <small class="text-primary" v-if="validating">Validando...</small>
          <div v-if="isValid">
            <input
              class="form-control form-control-sm my-2"
              type="text"
              placeholder="Ingresa tu cupón"
            />
            <input
              class="form-control form-control-sm"
              type="text"
              placeholder="Ingresa serie"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="validateDocument()"
          >
            Validar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ModalCoupon",

  data() {
    return {
      isValid: false,
      validating: false,
      urlApi: process.env.VUE_APP_URL_API,
      document: null,
    };
  },
  methods: {
    async validateDocument() {
      try {
        this.validating = true;
        const res = await axios.get(
          this.urlApi + "clients?document_client=" + this.document
        );
        if (res.data.res) {
          this.isValid = true;
          console.log(res);
        }
      } catch (error) {
        console.log(error.response.data);
        this.$notify({
          title: "Error",
          text: "Usted no se encuentra registrado en nuestro sistema!",
          type: "error",
        });
        this.$router.push("register-user#register");
        window.$("#staticBackdrop").modal("hide");
      }

      this.validating = false;
    },
  },
};
</script>