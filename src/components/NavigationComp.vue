<template>
  <nav class="navbar navbar-expand-lg navColor">
    <div class="container">
      <router-link class="navbar-brand" to="/">Bells</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <template v-if="$store.getters.isAuthenticated">
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <span class="nav-link">{{ user.username }}</span>
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link" @click="logout">Logout</router-link>
          </li>
          </template>
          <li class="nav-item" v-else>
            <router-link class="nav-link"  to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useUser } from "@/composables/users";
export default {
    data: function () {
        return {
            user: useUser(),
        };
    },
    methods: {
        async logout() {
            await this.$store.dispatch("logout");
            this.$router.replace("/login");
        },
    },
};
</script>


<style scoped>
.navColor {
  background-color: #f9f7f0;
}
.navColor, .navbar-brand, .nav-link {
    color: #072a40 !important;
    font-family: monospace;
    font-weight: 500;
}
.navbar-brand {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-family: cursive;
}
</style>
