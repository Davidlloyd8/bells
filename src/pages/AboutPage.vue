<template>
  <div>
    <NavigationComp />
    <div class="container-fluid">
      <div class="container">
        <h1 class="text-center mb-5">ABOUT</h1>
        <div class="row">
          <div class="col-lg-4">
            <img :src="imgMan" alt="" class="img-fluid">
          </div>
          <div class="col-lg-8">
            <p>Discover the Best Gadgets at Bells Store</p>
            <p class="pb-5">
              Are you looking for the latest and greatest gadgets to add to your
              collection? Look no further than Bells Store, where you can find
              the best gadgets to keep up with the modern world. Whether you're
              looking for the latest phone, a new laptop, or the latest gaming
              system, Bells Store has it all. We have an extensive selection of
              high-quality gadgets from the most trusted brands in the industry.
              At Bells Store, we understand that having the latest technology is
              important. That's why our selection of gadgets is constantly
              updated with the newest and most popular products. We carry the
              latest phones, laptops, and gaming systems from top brands such as
              Apple, Microsoft, and Sony. Plus, our selection of accessories and
              peripherals ensures you have everything you need to get the most
              out of your gadgets. When it comes to gadgets, our knowledgeable
              staff is here to help. We'll make sure you get the best product
              for your needs, whether you're looking for a powerful gaming
              system or a lightweight laptop. We'll also be happy to help you
              choose the right accessories and peripherals, so you can get the
              most out of your gadgets. At Bells Store, you can find the best
              gadgets and accessories at unbeatable prices. We offer free
              shipping on all orders, and our knowledgeable staff is here to
              help with any questions you may have. So, don't wait any longer.
              Discover the best gadgets at Bells Store today.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationComp from "../components/NavigationComp.vue";
import imgMan from "../assets/illustation of a man.png";
export default {
  components: {
    NavigationComp,
  },
  data: function () {
    return {
      imgMan,
    };
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: #178ca4 !important;
  color: #fff;
  font-family: monospace;
}
p {
  font-size: 18px;
}

@media screen and (max-width: 768px) {
  .col-lg-4 {
    display: none;
  }
}
</style>
