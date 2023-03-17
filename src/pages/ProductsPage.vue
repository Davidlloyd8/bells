<template>
  <div>
    <NavigationComp />
    <h2>Products</h2>
    <router-link
      :to="{ name: 'ProductPage', params: { id: product.id } }"
      v-for="product in data.products"
      :key="product.id"
    >
      <img :src="product.images[0]" :alt="product.title" />
      {{ product.title }}
    </router-link>
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
