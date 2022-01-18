<template>
  <div class="container wow fadeInUp" id="register">
    <div class="card shadow mb-5 bg-white rounded border-0">
      <div class="card-body">
        <h3 class="text-left">Registro de clientes</h3>
        <div>
          <div v-if="nexing || storing" class="d-flex justify-content-center">
            <div
              style="width: 5rem; height: 5rem"
              class="spinner-border text-primary"
              role="status"
            >
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          <div v-else>
            <div v-if="!submitted">
              <div v-if="formData === 1">
                <hr />
                <h5 class="text-left mb-4">Datos personales.</h5>

                <div
                  class="form-row form-wrap form-wrap text-justify"
                >
                  <div class="form-group col-md-6">
                    <label for="name text-sm">Tipo de documento</label>
                    <select
                      v-model="typeDocument"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !typeDocument && typeDocumentBlured,
                      }"
                      v-on:blur="typeDocumentBlured = true"
                    >
                      <option value="C">CEDULA DE CIUDADANIA</option>
                      <option value="CE">CEDULA DE EXTRANJERIA</option>
                    </select>
                    <div class="invalid-feedback">Tipo documento requerido</div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="name">Número de documento</label>
                    <input
                      type="number"
                      v-model="document"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !document && documentBlured,
                      }"
                      v-on:blur="documentBlured = true"
                    />
                    <div class="invalid-feedback">
                      Número de docuemento requerido
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="name">Nombre completo</label>
                    <input
                      v-model="name"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !name && nameBlured,
                      }"
                      v-on:blur="nameBlured = true"
                    />
                    <div class="invalid-feedback">Nombre requerido</div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="name">Primer apellido</label>
                    <input
                      v-model="surname"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !surname && surnameBlured,
                      }"
                      v-on:blur="surnameBlured = true"
                    />
                    <div class="invalid-feedback">
                      Primer apellido requerido
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="name">Segundo apellido</label>
                    <input
                      v-model="lastName"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !lastName && lastNameBlured,
                      }"
                      v-on:blur="lastNameBlured = true"
                    />
                    <div class="invalid-feedback">
                      Segundo apellido requerido
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="birthDate">Fecha nacimiento</label>
                    <input
                      type="date"
                      v-model="birthDate"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !birthDate && emailBlured,
                      }"
                      v-on:blur="birthDateBlured = true"
                    />
                    <div class="invalid-feedback">
                      Fecha nacimiento required
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="name">Genero</label>
                    <select
                      v-model="gender"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !gender && genderBlured,
                      }"
                      v-on:blur="genderBlured = true"
                    >
                      <option value="1">FEMENINO</option>
                      <option value="2">MASCULINO</option>
                    </select>
                    <div class="invalid-feedback">Genero requerido</div>
                  </div>
                </div>
              </div>

              <div v-else-if="formData === 2">
                <h5 class="text-left ml-3">Datos de contacto.</h5>
                <hr />
                <div
                  class="form-row form-wrap form-wrap text-justify"
                >
                  <div class="form-group col-md-6">
                    <label for="country">Pais de residencia</label>
                    <select
                      v-model="country"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !country && countryBlured,
                      }"
                      v-on:blur="countryBlured = true"
                    >
                      <option value="169">COLOMBIA</option>
                    </select>
                    <div class="invalid-feedback">Pais requerido</div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="deparment">Departamento de residencia</label>
                    <select
                      v-model="deparment"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !deparment && deparmentBlured,
                      }"
                      v-on:blur="deparmentBlured = true"
                    >
                      <option value="13">Bolívar</option>
                    </select>
                    <div class="invalid-feedback">Departamento requerido</div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="deparment">Ciudad de residencia</label>
                    <select
                      v-model="city"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !city && cityBlured,
                      }"
                      v-on:blur="cityBlured = true"
                    >
                      <option value="001">Cartagena</option>
                    </select>
                    <div class="invalid-feedback">Ciudad requerido</div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="deparment">Bario de residencia</label>
                    <select
                      v-model="neighborhood"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !neighborhood && neighborhoodBlured,
                      }"
                      v-on:blur="neighborhoodBlured = true"
                    >
                      <option value="LA CAROLINA">LA CAROLINA</option>
                    </select>
                    <div class="invalid-feedback">Barrio requerido</div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="email">Dirección de residencia</label>
                    <input
                      v-model="direction"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !direction && directionBlured,
                      }"
                      v-on:blur="directionBlured = true"
                    />
                    <div class="invalid-feedback">Dirección requerida</div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="email">Correo</label>
                    <input
                      v-model="email"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !validEmail(email) && emailBlured,
                      }"
                      v-on:blur="emailBlured = true"
                    />
                    <div class="invalid-feedback">Correo valido requerido</div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="email">Télefono</label>
                    <input
                      type="number"
                      v-model="phone"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !phone && phoneBlured,
                      }"
                      v-on:blur="phoneBlured = true"
                    />
                    <div class="invalid-feedback">Télefono requerido</div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="alert alert-success" role="alert">
              <h5><b>¡Exito!</b> Gracias por tu registro</h5>
              <p>En tus proximas compras podras redimir tus cupones!</p>
            </div>
            <router-link v-if="submitted" to="/" type="button" class="btn btn-primary btn-block">
              Registar cupón
            </router-link>
          </div>
        </div>

        <div class="row container">
          <button
            v-if="formData === 2 && !submitted"
            @click="prevForm()"
            type="button"
            class="btn btn-danger"
          >
            Anterior
          </button>

          <button
            type="button"
            @click="nexForm()"
            v-else-if="formData === 1 && !submitted"
            class="btn btn-primary"
          >
            Siguiente
          </button>

          <button
            v-if="formData === 2 && !submitted"
            type="submit"
            v-on:click.stop.prevent="submit()"
            class="btn btn-primary ml-2"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--end form-wrapper-->
</template>
<script>
import axios from "axios";
export default {
  name: "RegisterUser",
  data() {
    return {
      email: "",
      name: "",
      surname: "",
      lastName: "",
      typeDocument: "",
      document: "",
      birthDate: "",
      gender: "",
      country: "",
      deparment: "",
      city: "",
      neighborhood: "",
      direction: "",
      phone: "",

      emailBlured: false,
      nameBlured: false,
      typeDocumentBlured: false,
      documentBlured: false,
      surnameBlured: false,
      lastNameBlured: false,
      birthDateBlured: false,
      genderBlured: false,
      countryBlured: false,
      deparmentBlured: false,
      cityBlured: false,
      neighborhoodBlured: false,
      directionBlured: false,
      phoneBlured: false,

      valid: false,
      submitted: false,
      formData: 1,
      nexing: false,
      urlApi: process.env.VUE_APP_URL_API,
      storing: false,
    };
  },
  methods: {
    validatePersonalInformation() {
      if (
        this.name &&
        this.typeDocument &&
        this.document &&
        this.surname &&
        this.lastName &&
        this.birthDate &&
        this.gender
      ) {
        return true;
      }
      this.validate();
      return false;
    },
    validate: function () {
      this.emailBlured = true;
      this.nameBlured = true;
      this.typeDocumentBlured = true;
      this.documentBlured = true;
      this.surnameBlured = true;
      this.lastNameBlured = true;
      this.birthDateBlured = true;
      this.genderBlured = true;
      this.countryBlured = true;
      this.deparmentBlured = true;
      this.cityBlured = true;
      this.directionBlured = true;
      this.neighborhoodBlured = true;
      this.phoneBlured = true;
      if (this.validEmail(this.email) && this.validatePersonalInformation()) {
        this.valid = true;
      }
    },
    validEmail: function (email) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      return re.test(email.toLowerCase());
    },
    async submit() {
      try {
        this.validate();
        if (this.valid) {
          this.storing = true;
          const content = {};
          content.nombres = this.name;
          content.primer_apellido = this.surname;
          content.segundo_apellido = this.lastName;
          content.direccion = this.direction;
          content.departamento = this.deparment;
          content.pais = this.country;
          content.municipio = this.city;
          content.barrio = this.neighborhood;
          content.tipo_cliente = "0";
          content.tipo_documento = this.typeDocument;
          content.numero_identificacion = this.document.toString();
          content.fecha_nacimiento = "19941011";
          content.telefono = this.phone.toString();
          content.email = this.email;
          content.genero = this.gender;
          console.log(content);
          const res = await axios.post(this.urlApi + "clients/export", content);
          if (res.data.res) {
            this.submitted = true;
            this.$notify({
              title: "Exito",
              text: "Registro exitoso!",
              type: "success",
            });
          }
          this.storing = false;
        }
      } catch (error) {
        console.log(error.response);
      }
    }, //end submit

    nexForm() {
      if (this.validatePersonalInformation()) {
        this.nexing = true;
        setTimeout(() => {
          if (this.validatePersonalInformation()) {
            this.formData = this.formData + 1;
            this.nexing = false;
          }
        }, 900);
      }
    },
    prevForm() {
      this.formData = this.formData - 1;
    },
  },
};
</script>
<style>
</style>