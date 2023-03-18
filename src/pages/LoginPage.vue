<template>
  <NavigationComp />
  <div class="container-fluid">
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-4 mt-3">
                <label for="user">Username:</label>
              </div>
              <div class="col-lg-8 mt-3">
                <input
                  type="text"
                  v-model="username"
                  placeholder="Username"
                  required
                  class="form-control"
                  id="user"
                />
              </div>
              <div class="col-lg-4 mt-3">
                <label for="pwd">Password:</label>
              </div>
              <div class="col-lg-8 mt-3">
                <input
                  type="password"
                  v-model="password"
                  placeholder="Password"
                  required
                  class="form-control"
                  id="pwd"
                />
              </div>
              <div class="col-lg-12 mt-4">
                <button type="submit" class="btn form-control p-3">Login</button>
              </div>
              <div class="col--lg-12 mt-2">
                <p class="small">
                  I don't have an account
                  <router-link to="/signup">Register</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3"></div>
      </form>
    </div>
  </div>
</template>

<script>
import NavigationComp from "../components/NavigationComp.vue";
export default {
  components: {
    NavigationComp,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
      this.$router.push("/products");
    },
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: #178ca4;
  color: #fff;
  font-family: monospace;
  height: 90vh;
}
.btn {
  background-color: #f9f7f0;
  color: #072a40;
  font-weight: 500;
  font-family: monospace;
}
a {
  color: #072a40;
  text-decoration: none;
}
</style>
