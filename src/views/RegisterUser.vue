<template>
  <div class="container wow fadeInUp" id="register">
    <div class="card shadow mb-5 bg-white rounded border-0">
      <div class="card-body">
        <h3 class="text-center text-primary">Registro de clientes</h3>
        <div>
          <div
            v-if="nexing || storing"
            class="d-flex justify-content-center"
            style="height: 330px"
          >
            <div
              style="width: 5rem; height: 5rem; margin-top: 100px"
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

                <div class="form-row form-wrap form-wrap text-justify">
                  <div class="form-group col-md-6">
                    <!--  <label for="name text-sm">Tipo de documento</label> -->
                    <select
                      v-model="typeDocument"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid':
                          typeDocumentBlured &&
                          typeDocument === '--TIPO DE DOCUMENTO--',
                      }"
                      v-on:blur="typeDocumentBlured = true"
                    >
                      <option>--TIPO DE DOCUMENTO--</option>
                      <option value="C">CEDULA DE CIUDADANIA</option>
                      <option value="CE">CEDULA DE EXTRANJERIA</option>
                    </select>
                    <div class="invalid-feedback">Tipo documento requerido</div>
                  </div>

                  <div class="form-group col-md-6">
                    <!-- <label for="name">Número de documento</label> -->
                    <input
                      type="number"
                      v-model="document"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !document && documentBlured,
                      }"
                      v-on:blur="documentBlured = true"
                      placeholder="Número de identificación..."
                    />
                    <div class="invalid-feedback">
                      Número de docuemento requerido
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <!--  <label for="name">Nombre completo</label> -->
                    <input
                      v-model="name"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !name && nameBlured,
                      }"
                      v-on:blur="nameBlured = true"
                      placeholder="Nombre completo..."
                    />
                    <div class="invalid-feedback">Nombre requerido</div>
                  </div>

                  <div class="form-group col-md-6">
                    <!-- <label for="name">Primer apellido</label> -->
                    <input
                      v-model="surname"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !surname && surnameBlured,
                      }"
                      v-on:blur="surnameBlured = true"
                      placeholder="Primer apellido..."
                    />
                    <div class="invalid-feedback">
                      Primer apellido requerido
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <!-- <label for="name">Segundo apellido</label> -->
                    <input
                      v-model="lastName"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !lastName && lastNameBlured,
                      }"
                      v-on:blur="lastNameBlured = true"
                      placeholder="Segundo apellido..."
                    />
                    <div class="invalid-feedback">
                      Segundo apellido requerido
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <!-- <label for="birthDate">Fecha nacimiento</label> -->
                    <v-date-picker v-model="birthDate" :masks="masks">
                      <template v-slot="{ inputValue, inputEvents }">
                        <input
                          :value="inputValue"
                          v-on="inputEvents"
                          v-bind:class="{
                            'form-control form-control-sm': true,
                            'is-invalid':
                              birthDate == 'Fecha de nacimiento...' &&
                              emailBlured,
                          }"
                          v-on:blur="birthDateBlured = true"
                          placeholder="Fecha de nacimiento..."
                        />
                      </template>
                    </v-date-picker>
                    <div
                      class="text-danger text-sm"
                      v-if="
                        birthDate == 'Fecha de nacimiento...' && emailBlured
                      "
                    >
                      Fecha nacimiento required
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <!-- <label for="name">Genero</label> -->
                    <select
                      v-model="gender"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': gender == '--GÉNERO--' && genderBlured,
                      }"
                      v-on:blur="genderBlured = true"
                    >
                      <option>--GÉNERO--</option>
                      <option value="1">FEMENINO</option>
                      <option value="2">MASCULINO</option>
                    </select>
                    <div class="invalid-feedback">Género requerido</div>
                  </div>
                </div>
              </div>

              <div v-if="formData === 2">
                <hr />
                <h5 class="text-left ml-3">Datos de contacto.</h5>
                <div class="form-row form-wrap form-wrap text-justify">
                  <div class="form-group col-md-6">
                    <!-- <label for="country">Pais de residencia</label> -->
                    <select
                      @change="listDeparment(country)"
                      v-model="country"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid':
                          country == '--PAÍS DE RESIDENCIA--' && countryBlured,
                      }"
                      v-on:blur="countryBlured = true"
                    >
                      <option>--PAÍS DE RESIDENCIA--</option>

                      <option value="169">COLOMBIA</option>
                    </select>
                    <div class="invalid-feedback">Pais requerido</div>
                  </div>

                  <div class="form-group col-md-6">
                    <!--  <label for="deparment">Departamento de residencia</label> -->
                    <select
                      @change="listCities(deparment)"
                      v-model="deparment"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid':
                          deparment == '--DEPARTAMENTO DE RESIDENCIA--' &&
                          deparmentBlured,
                      }"
                      v-on:blur="deparmentBlured = true"
                    >
                      <option>--DEPARTAMENTO DE RESIDENCIA--</option>
                      <option
                        v-for="item in deparments"
                        :key="item"
                        :value="item.cod_erp"
                      >
                        {{ item.descripcion }}
                      </option>
                    </select>
                    <div class="invalid-feedback">Departamento requerido</div>
                  </div>

                  <div class="form-group col-md-6">
                    <!-- <label for="deparment">Ciudad de residencia</label> -->
                    <select
                      v-model="city"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid':
                          city == '--CIUDAD DE RESIDENCIA--' && cityBlured,
                      }"
                      v-on:blur="cityBlured = true"
                    >
                      <option>--CIUDAD DE RESIDENCIA--</option>
                      <option
                        v-for="item in cities"
                        :key="item.cod_erp"
                        :value="item.cod_erp"
                      >
                        {{ item.descripcion }}
                      </option>
                    </select>
                    <div class="invalid-feedback">Ciudad requerido</div>
                  </div>
                 

                  <div class="form-group col-md-6">
                    <!--  <label for="deparment">Bario de residencia</label> -->
                    <select
                      v-model="neighborhood"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid':
                          neighborhood == '--BARRIO DE RESIDENCIA--' &&
                          neighborhoodBlured,
                      }"
                      v-on:blur="neighborhoodBlured = true"
                    >
                      <option>--BARRIO DE RESIDENCIA--</option>
                      <option value="LA CAROLINA">LA CAROLINA</option>
                    </select>
                    <div class="invalid-feedback">Barrio requerido</div>
                  </div>

                  <div class="form-group col-md-6">
                    <!--  <label for="email">Dirección de residencia</label> -->
                    <input
                      v-model="direction"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !direction && directionBlured,
                      }"
                      v-on:blur="directionBlured = true"
                      placeholder=" Dirección de residencia..."
                    />
                    <div class="invalid-feedback">Dirección requerida</div>
                  </div>

                  <div class="form-group col-md-6">
                    <!-- <label for="email">Correo</label> -->
                    <input
                      v-model="email"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !validEmail(email) && emailBlured,
                      }"
                      v-on:blur="emailBlured = true"
                      placeholder="Correo eléctronico..."
                    />
                    <div class="invalid-feedback">Correo valido requerido</div>
                  </div>

                  <div class="form-group col-md-6">
                    <!-- <label for="email">Télefono</label> -->
                    <input
                      type="number"
                      v-model="phone"
                      v-bind:class="{
                        'form-control form-control-sm': true,
                        'is-invalid': !phone && phoneBlured,
                      }"
                      v-on:blur="phoneBlured = true"
                      placeholder="Télefono..."
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
            <router-link
              v-if="submitted"
              to="/"
              type="button"
              class="btn btn-primary btn-block"
            >
              Registar cupón
            </router-link>
          </div>
        </div>

        <div class="row container">
          <button
            v-if="formData === 2 && !submitted"
            @click="prevForm()"
            type="button"
            class="btn btn-warning btn-sm px-3"
          >
            Anterior
          </button>

          <button
            type="button"
            @click="nexForm()"
            v-else-if="formData === 1 && !submitted"
            class="btn btn-primary btn-sm px-3"
          >
            Siguiente
          </button>

          <button
            v-if="formData === 2 && !submitted"
            type="submit"
            v-on:click.stop.prevent="submit()"
            class="btn btn-primary ml-1 btn-sm px-3"
          >
            Guardar
          </button>
          <router-link v-if="!submitted" to="/" type="button" class="btn btn-danger ml-1 btn-sm px-3">
            Cancelar
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import GetDataContact from "../assets/js/GetDataContact.js";
export default {
  name: "RegisterUser",
  data() {
    return {
      masks: {
        input: "YYYY-MM-DD",
      },
      email: "",
      name: "",
      surname: "",
      lastName: "",
      typeDocument: "--TIPO DE DOCUMENTO--",
      document: "",
      birthDate: "Fecha de nacimiento...",
      gender: "--GÉNERO--",
      country: "--PAÍS DE RESIDENCIA--",
      deparment: "--DEPARTAMENTO DE RESIDENCIA--",
      city: "--CIUDAD DE RESIDENCIA--",
      neighborhood: "--BARRIO DE RESIDENCIA--",
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
      dateValid: false,

      countries: null,
      deparments: null,
      cities: null,
    };
  },
  mounted() {
    this.listCounty();
    window.$(document).ready(function () {
      window.$(".js-example-basic-single").select2();
    });
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
        this.gender &&
        this.validateDate()
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
          content.fecha_nacimiento = moment(this.birthDate).format("YYYYMMDD");
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
          console.log(res.data);
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
        }, 200);
      }
    },
    prevForm() {
      this.formData = this.formData - 1;
    },
    validateDate() {
      if (
        moment(this.birthDate) <= moment().subtract(18, "years") &&
        this.birthDate !== "Fecha de nacimiento..."
      ) {
        return true;
      } else {
        this.dateValid = false;
        this.$notify({
          title: "Error",
          text: "No se acepta el registro de menores de edad!",
          type: "error",
        });
      }
    },

    async listCounty() {
      GetDataContact.getCoutries().then((res) => {
        this.countries = res;
      });
    },

    async listDeparment(country) {
      this.deparments = null;
      let option = [];
      GetDataContact.getDeparment(country).then((res) => {
        for (let index = 0; index < res.length; index++) {
          if (res[index].descripcion) {
            option.push({
              cod_erp: res[index].cod_erp,
              descripcion: res[index].descripcion,
            });
          }
        }
        this.deparments = option;
      });
    },

    async listCities(deparment) {
      this.city = "--CIUDAD DE RESIDENCIA--";
      this.cities = null;
      let option = [];
      GetDataContact.getCities(this.country, deparment).then((res) => {
        for (let index = 0; index < res.length; index++) {
          if (res[index].descripcion) {
            option.push({
              cod_erp: res[index].cod_erp,
              descripcion: res[index].descripcion,
            });
          }
        }
        this.cities = option;
      });
    },
  },
};
</script>
<style>
</style>