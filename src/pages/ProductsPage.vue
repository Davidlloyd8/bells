<template>
  <div>
    <NavigationComp />
    <div class="container-fluid">
      <div class="container">
        <h2 class="text-center">Products</h2>
        <div class="row">
          <div class="col-lg-4 mb-3">
            <router-link
              :to="{ name: 'ProductPage', params: { id: product.id } }"
              v-for="product in data.products"
              :key="product.id"
            >
              <div class="card" style="width: 15rem">
                <img
                  :src="product.images[0]"
                  class="card-img-top"
                  :alt="product.title"
                />
                <div class="card-body">
                  <p class="card-text">
                    {{ product.title }}
                  </p>
                  <p class="card-text">${{ product.price }}.00</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavigationComp from "../components/NavigationComp.vue";
import axios from "axios";
export default {
  components: {
    NavigationComp,
  },
  data() {
    return {
      data: {},
      loading: true,
      errored: false,
    };
  },
  mounted() {
    axios.get("https://dummyjson.com/products").then((response) => {
      this.data = response.data;
    });
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: #178ca4 !important;
  color: #fff;
  font-family: monospace;
}
a {
  text-decoration: none;
  color: #072a40;
}
</style>
