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
          <div class="form-row form-wrap form-wrap text-justify">
            <div class="form-group col-md-12">
              <label for="document" v-if="!valid">Validar documento</label>
              <input
                type="number"
                v-model="document"
                v-bind:class="{
                  'form-control form-control-sm': true,
                  'is-invalid': !document && documentBlured,
                }"
                v-on:blur="documentBlured = true"
                placeholder="Número de documento..."
              />
              <div class="invalid-feedback">Número de documento requerido</div>
            </div>

            <div class="form-group col-md-12" v-if="isValid">
              <input
                type="number"
                v-model="coupon"
                v-bind:class="{
                  'form-control form-control-sm': true,
                  'is-invalid': !coupon && couponBlured,
                }"
                v-on:blur="couponBlured = true"
                placeholder="Número..."
              />
              <div class="invalid-feedback">Número requerido</div>
            </div>

            <div class="form-group col-md-12" v-if="isValid">
              <input
                type="number"
                v-model="serie"
                v-bind:class="{
                  'form-control form-control-sm': true,
                  'is-invalid': !serie && serieBlured,
                }"
                v-on:blur="serieBlured = true"
                placeholder="Serie..."
              />
              <div class="invalid-feedback">Serie requerida</div>
            </div>
          </div>

          <div class="d-flex justify-content-center" v-if="validating">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            data-dismiss="modal"
            @click="cancel()"
          >
            Cancelar
          </button>
          <button
            v-if="!valid"
            type="button"
            class="btn btn-primary"
            @click="validateDocument()"
          >
            Validar
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click="storeCoupon()"
          >
            Registrar
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
      urlApiAdmin: process.env.VUE_APP_URL_API_ADMIN,
      document: "",
      coupon: "",
      serie: "",
      documentBlured: false,
      couponBlured: false,
      serieBlured: false,
      valid: false,
      data_client: null,
      data: {},
      validCoupon: false,
    };
  },
  methods: {
    async validateDocument() {
      try {
        this.validate();
        if (this.valid) {
          this.validating = true;
          const res = await axios.get(
            this.urlApi + "clients?document_client=" + this.document
          );
          if (res.data.res) {
            this.data_client = res.data.data;
            this.isValid = true;
          } else {
            this.isValid = false;
          }
        }
      } catch (error) {
        console.log(error.response);
        this.isValid = false;

        this.$notify({
          title: "Error",
          text: "Usted no se encuentra registrado en nuestro sistema!",
          type: "error",
        });
        this.$router.push("register-user");
        window.$("#staticBackdrop").modal("hide");
      }
      this.validating = false;
    },
    async storeCoupon() {
      this.validateCoupon();
      if (this.validCoupon) {
        const res = await axios.get(
          "https://api-wsdl.acercate.com.co/firas/validate?id_cliente=" +
            this.document +
            "&numero=" +
            this.coupon +
            "&serie=" +
            this.serie
        );

        if (res.data.data.Column1 === "1") {
          this.data.document = this.document;
          this.data.coupon = this.coupon;
          this.data.serie = this.serie;

          if (this.data_client.f9740_nombre) {
            this.data.name = this.data_client.f9740_nombre;
          } else {
            this.data.name = this.data_client.f9740_razon_social;
          }

          if (
            this.data_client.f9740_apellido_1 &&
            this.data_client.f9740_apellido_2
          ) {
            this.data.last_name =
              this.data_client.f9740_apellido_1 +
              this.data_client.f9740_apellido_2;
          } else {
            this.data.last_name = this.data_client.f9740_razon_social;
          }

          this.data.phone = this.data_client.f9740_celular;
          this.data.email = this.data_client.f9740_email;
          this.data.city = this.data_client.ciudad;
          this.data.direction = this.data_client.direccion;
          const store = await axios.post(
            this.urlApiAdmin + "register-coupon-client",
            this.data
          );
          if (store.data.res) {
            this.couponBlured = false;
            this.serieBlured = false;
            this.$notify({
              title: "Éxito",
              text: store.data.message,
              type: "success",
            });
          } else {
            this.$notify({
              title: "Error",
              text: store.data.message,
              type: "error",
            });
          }
        } else {
          this.$notify({
            title: "Error",
            text: "El cupón o serie no estan asociados a este domcuento",
            type: "error",
          });
        }

        this.coupon = "";
        this.serie = "";
      }
    },
    validate: function () {
      this.documentBlured = true;
      if (this.document) {
        this.valid = true;
      }
    },
    validateCoupon() {
      this.couponBlured = true;
      this.serieBlured = true;
      if (this.coupon && this.serie) {
        this.validCoupon = true;
      } else {
        this.validCoupon = false;
      }
    },
    cancel() {
      window.$("#staticBackdrop").modal("hide");
      this.coupon = "";
      this.serie = "";
      this.document = "";
      this.isValid = false;
      this.validating = false;
      this.valid = false;
      this.data_client = null;
      this.data = {};
      this.validCoupon = false;
    },
  },
};
</script>