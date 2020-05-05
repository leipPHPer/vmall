<template>
  <div id="home">
    <van-nav-bar title class="bar">
      <template #title>
        <p class="nav-title">分类</p>
      </template>
    </van-nav-bar>

    <home-swiper :banners="banners"></home-swiper>
    <home-btn1 :recommends="recommends"></home-btn1>
    <bzlx></bzlx>
    <tab :tabArr="['流行','新款','精选']" class="home-tab" @tabActive="tabActive"></tab>
    <home-list :tabType="tabType"></home-list>
  </div>
</template>

<script>
// import NavBar from "components/common/navbar/NavBar";

import HomeSwiper from "components/content/home/HomeSwiper";
import HomeBtn1 from "components/content/home/HomeBtn1";
import Tab from "components/content/tab/Tab";
import HomeList from "components/content/home/HomeList";
import Bzlx from "@/components/content/home/Bzlx";

import { getHomeMultidata, getHomeListData } from "network/home";

import { NavBar } from "vant";

export default {
  name: "Home",
  components: {
    [NavBar.name]: NavBar,
    HomeSwiper,
    HomeBtn1,
    Bzlx,
    Tab,
    HomeList
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
.bar {
  background: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.nav-title {
  color: #fff;
}
.home-tab {
  position: sticky;
  top: 44px;
}
</style>