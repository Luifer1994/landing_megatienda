<template>
  <!-- Banner info -->
  <div class="page-section banner-info">
    <div
      class="wrap bg-image"
      style="background-image: url(../assets/img/bg_pattern.svg)"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 py-3 pr-lg-5 wow fadeInUp">
            <h2 class="title-section">
              Descubre como obténer cupones con códigos para participar.
            </h2>
            <div class="divider"></div>

            <ul class="theme-list theme-list-light text-white">
              <li>
                <!--  <div class="h5">SEO Content Strategy</div> -->
                <p>
                  Compra <b>$50.000</b> en carnes o <b>$30.000</b> en frutas y
                  verduras o <b>$15.000</b> en cafetería y panadería de la casa
                  en nuestras tiendas de <b>Bolívar</b> y <b>Altantico.</b>
                </p>
              </li>
              <li>
                <!--  <div class="h5">B2B SEO</div> -->
                <p>
                  Compra <b>$40.000</b> en carnes o <b>$40.000</b> en frutas y
                  verduras en nuestras tiendas de <b>Bogotá.</b>
                </p>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 py-3 wow fadeInRight">
            <div class="img-fluid text-center">
              <img
                srcset="
                  ../assets/img/Landing-10.png 320w,
                  ../assets/img/Landing-10.png 480w,
                  ../assets/img/Landing-10.png 800w
                "
                sizes="(max-width: 400px) 320px,
            (max-width: 400px) 320px,
            320px"
                src="../assets/img/Landing-10.png"
                alt="Mega Tiendas"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .wrap -->
  </div>
  <!-- .page-section -->
</template>
<script>
export default {
  name: "BannerInfo",
};
</script>