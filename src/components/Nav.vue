<template>
  <!-- Back to top button -->
  <!-- <div class="back-to-top"></div> -->

  <header>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white"
      data-offset="500"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img
            srcset="
              ../assets/img/logo.png 100w,
              ../assets/img/logo.png 100w,
              ../assets/img/logo.png 900w
            "
            sizes="(max-width: 50px) 50px,
            (max-width: 50px) 50px,
            240px"
            src="../assets/img/logo.png"
          />
        </router-link>

        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link
                to="/"
                @click="closedMenu()"
                class="nav-link"
                style="color: #014898"
                ><b>Inicio</b>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                @click="closedMenu()"
                to="/terms-conditions"
                class="nav-link"
                style="color: #014898"
                ><b>Términos y condiciones</b>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Nav",
  methods: {
    closedMenu() {
      window.$(".navbar-toggler").click();
    },
  },
};
</script>
<style>
.router-link-exact-active {
  color: rgb(226, 6, 19) !important;
  font-weight: bold;
}
</style>