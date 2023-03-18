<template>
  <div>
    <Navigation />
    <div class="container-fluid">
      <div class="container">
        <div class="row p-3">
          <div class="box">
            <img :src="imgMan" alt="illustration" class="img-fluid d-flex" />
          </div>
          <div class="col-lg-8">
            <h1 class="text-center wt">WELCOME TO</h1>
            <h1 class="text-center store">BELLS STORE</h1>
            <p>Discover the Best Gadgets at Bells Store</p>
            <p class="small">
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
              out of your gadgets.
            </p>
            <div class="row">
              <div class="col-lg-4">
                <router-link to="/signup" class="btn form-control p-2"
                  >SignUp</router-link
                >
              </div>
              <div class="col-lg-4">
                <router-link to="/login" class="btn form-control p-2"
                  >Login</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/NavigationComp.vue";
import imgMan from "@/assets/illustation of a man.png";
export default {
  components: {
    Navigation,
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
.box {
  width: 27%;
  height: 20%;
}
img {
  width: 100%;
  height: 100%;
}
.wt {
  font-size: 30px;
  font-weight: 700;
}
.store {
  font-size: 50px;
  font-weight: 700;
  font-family: cursive;
}
p {
  font-size: 16px;
  font-weight: 500;
}
.btn {
  background-color: #f9f7f0;
  color: #072a40;
  font-weight: 500;
  font-family: monospace;
}
</style>
