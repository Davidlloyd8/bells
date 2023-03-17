<template>
  <div>
    <NavigationComp />
    <h2>Products Details</h2>
    <div v-if="!product">Loading.....</div>
    <div v-else>
      <img :src="product.thumbnail" :alt="product.title" />
      <p>{{ product.title }}</p>
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
