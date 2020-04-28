<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">V商场</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-btn1 :recommends="recommends"></home-btn1>
    <home-btn2></home-btn2>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "components/content/home/HomeSwiper";
import HomeBtn1 from "components/content/home/HomeBtn1";
import HomeBtn2 from 'components/content/home/HomeBtn2'

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeBtn1,
    HomeBtn2
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style scoped>
#home {
  padding: 44px 0 49px 0;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>