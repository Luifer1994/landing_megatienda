<template>
  <div class="page-section bg-light">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <div class="subhead text-primary">Este espectacular</div>
        <h2 class="title-section" style="color: #e20613">
          <b>RENAULT SANDERO</b>
        </h2>
        <div class="subhead text-primary">Puede ser tuyo</div>
      </div>

      <div class="container">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item p-5 active">
              <img
                src="../assets/img/Piezas-para-landing-Carro-Vista-1.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item p-5">
              <img
                src="../assets/img/Piezas-para-landing-Carro-vista-2.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item p-5">
              <img
                src="../assets/img/Piezas-para-landing-Carro-vista-3.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only" style="color: #014898">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
  <!-- .page-section -->
</template>
<script>
export default {
  name: "Services",
};
</script>
<style>
.carousel-control-prev {
  background-color: rgba(255, 255, 0, 0);
  border: none;
}
.carousel-control-next {
  background-color: rgba(255, 255, 0, 0);
  border: none;
}
</style>