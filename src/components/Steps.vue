<template>
  <div class="page-section">
    <div class="container">
      <div class="row">
        <div
          class="card card-service wow fadeInUp border-0 mx-2"
          style="max-width: 540px"
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/img/Piezas-para-landing-Boton-1.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="text-secondary"><b>Regístrate</b></h5>
                <p class="card-text">
                  Antes de realizar tus compras regístrate o actualiza tus
                  datos.
                </p>
                <a href="service.html" class="btn btn-primary">Regístrate</a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card card-service wow fadeInUp border-0 mx-2"
          style="max-width: 540px"
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/img/Piezas-para-landing-Boton-1.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8" id="coupon">
              <div class="card-body">
                <h5 class="text-secondary"><b>Ingresa</b></h5>
                <p class="card-text">
                  Ingresa: Ingresa a www.landing.megatiendas.co y registra tus
                  códigos.
                </p>
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                  class="btn btn-primary"
                >
                  Ingresar cupón
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- .container -->
  </div>
  <!-- .page-section -->

  <ModalCoupon></ModalCoupon>
</template>
<script>
import ModalCoupon from "./ModalCoupon";
export default {
  name: "Steps",
  components: {
    ModalCoupon,
  },
};
</script>