<template>
  <div>
    <NavigationComp />
    <div class="container-fluid">
      <div class="container">
        <h2 class="text-center">Products</h2>
        <div class="row">
          <div
            class="col-lg-3 mb-3"
            v-for="product in data.products"
            :key="product.id"
          >
            <router-link
              :to="{ name: 'ProductPage', params: { id: product.id } }"
            >
              <div class="card p-3" style="width: 15rem">
                <img
                  :src="product.images[0]"
                  class="card-img-top"
                  :alt="product.title"
                />
                <div class="card-body">
                  <h3 class="card-text text-center">
                    {{ product.title }}
                  </h3>
                  <p class="card-text text-center">${{ product.price }}.00</p>
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
.col-lg-4 {
  height: 100%;
}
img {
  height: 150px;
  width: 100%;
}
h3 {
  font-size: 15px;
  font-weight: 700;
}
</style>
