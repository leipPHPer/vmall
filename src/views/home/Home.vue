<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">V商场</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-btn1 :recommends="recommends"></home-btn1>
    <home-btn2></home-btn2>
    <tab :tabArr="['流行','新款','精选']" class="home-tab" @tabActive="tabActive"></tab>
    <home-list :tabType="tabType"></home-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import HomeSwiper from "components/content/home/HomeSwiper";
import HomeBtn1 from "components/content/home/HomeBtn1";
import HomeBtn2 from "components/content/home/HomeBtn2";
import Tab from "components/content/tab/Tab";
import HomeList from "components/content/home/HomeList";

import { getHomeMultidata, getHomeListData } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeBtn1,
    HomeBtn2,
    Tab,
    HomeList
    // HomeListItem
  },
  data() {
    return {
      banners: [],
      recommends: [],
      // goods: {
      //   pop: { page: 0, list: [] },
      //   new: { page: 0, list: [] },
      //   sell: { page: 0, list: [] }
      // },
      tabType: "pop"
    };
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  methods: {
    tabActive(index) {
      switch (index) {
        case 0:
          this.tabType = "pop";
          break;
        case 1:
          this.tabType = "new";
          break;
        case 2:
          this.tabType = "sell";
          break;
      }
    }
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
.home-tab {
  position: sticky;
  top: 44px;
}
</style>