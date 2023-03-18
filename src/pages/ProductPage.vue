<template>
  <div>
    <NavigationComp />
    <div class="container-fluid">
      <div class="container">
        <h2 class="text-center">Products Details</h2>
        <div v-if="!product" class="small">Loading.....</div>
        <div v-else>
          <div class="row">
            <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="product.thumbnail" class="img-fluid rounded-start" :alt="product.title" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">{{ product.title }}</h3>
                    <p class="card-text small">
                      {{product.description}}
                    </p>
                    <p class="card-text">
                      ${{product.price}}.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
      product: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    axios
      .get(`https://dummyjson.com/products/${this.$route.params.id}`)
      .then((response) => {
        this.product = response.data;
      });
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: #178ca4 !important;
  color: #fff;
  font-family: monospace;
  height: 90vh;
}
.card {
  color: #178ca4;
  margin: 0 auto;
}
img {
  width: 100%;
  height: 100%;
}
</style>
