<template>
  <div class="container">
    <div class="page-banner home-banner">
      <div class="row align-items-center flex-wrap-reverse h-100">
        <div class="col-md-6 wow fadeInLeft mb-4">
          <img
            srcset="
              ../assets/img/Piezas-para-landing-Insignia.png 320w,
              ../assets/img/Piezas-para-landing-Insignia.png 480w,
              ../assets/img/Piezas-para-landing-Insignia.png 800w
            "
            sizes="(max-width: 340px) 280px,
            (max-width: 480px) 340px,
            600px"
            src="../assets/img/Piezas-para-landing-Insignia.png"
            alt="Mega Tiendas"
          />
        </div>
        <div class="col-md-6 wow zoomIn">
          <div class="img-fluid text-center">
            <img
              src="../assets/img/Piezas-para-landing-Banner.png"
              class="responsive"
              alt="Responsive image"
            />
          </div>
        </div>
      </div>
      <!-- <a href="#about" class="btn-scroll" data-role="smoothscroll"
        ><span class="mai-arrow-down"></span
      ></a> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
};
</script>
<style>
.responsive {
  width: 100%;
  max-width: 500px;
  height: auto;
}
.mt {
  margin-top: 1px;
}
.mb {
  margin-bottom: 0%;
}
</style>