<template>
  <div>
    <NavigationComp />
    <router-view></router-view>

    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="row mt-5">
          <div class="col-lg-3 mb-3">
            <label for="fname">FullName:</label>
          </div>
          <div class="col-lg-7 mb-3">
            <input
              type="text"
              class="form-control"
              id="fname"
              placeholder="Fullname"
              required
            />
          </div>
          <div class="col-lg-3 mb-3">
            <label for="email">Email:</label>
          </div>
          <div class="col-lg-7 mb-3">
            <input
              v-model="email"
              type="text"
              class="form-control"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div class="col-lg-3 mb-3">
            <label for="user">Username:</label>
          </div>
          <div class="col-lg-7 mb-3">
            <input
              type="text"
              v-model="username"
              class="form-control"
              id="user"
              placeholder="Username"
              required
            />
          </div>
          <div class="col-lg-3 mb-3">
            <label for="pwd">Password:</label>
          </div>
          <div class="col-lg-7 mb-3">
            <input
              type="password"
              v-model="password"
              class="form-control"
              id="pwd"
              placeholder="Password"
              required
            />
          </div>
          <div class="col-lg-10 mt-4">
            <button type="submit" class="btn btn-primary p-3 form-control">
              Sign up
            </button>
          </div>
        </div>
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
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch("signup", {
        email: this.email,
        username: this.username,
        password: this.password,
      });
      await this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
      this.$router.push("/products");
    },
  },
};
</script>
