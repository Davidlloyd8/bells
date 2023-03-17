<template>
  <NavigationComp />
  <form @submit.prevent="submitForm">
    <div class="row mt-5">
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
          type="text"
          v-model="password"
          placeholder="Password"
          required
          class="form-control"
          id="pwd"
        />
      </div>
      <div class="col-lg-12 mt-4">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
      <div class="col--lg-12 mt-2">
        <p class="small">I don't have an account 
            <router-link to="/signup">Register</router-link>
        </p>
      </div>
    </div>
  </form>
</template>

<script>
import NavigationComp from '../components/NavigationComp.vue'
export default {
    components: {
        NavigationComp
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async submitForm() {
            await this.$store.dispatch('login', {
                username: this.username,
                password: this.password
            });
            this.$router.push('/products');
        },
    },
};
</script>
