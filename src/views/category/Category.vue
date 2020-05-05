<template>
  <div>
    <van-nav-bar title="分类" class="bar" color="#fff"></van-nav-bar>
    <div class="left">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item title="上衣" />
        <van-sidebar-item title="裤子" />
        <van-sidebar-item title="裙子" />
      </van-sidebar>
    </div>
    <div class="right">
      <cate-item :cateRes="res"></cate-item>
    </div>
  </div>
</template>

<script>
import { Notify, Sidebar, SidebarItem, NavBar, Col, Row } from "vant";
import CateItem from "@/views/category/CateItem";

export default {
  name: "Category",
  components: {
    [Notify.name]: Notify,
    [Sidebar.name]: Sidebar,
    [NavBar.name]: NavBar,
    [SidebarItem.name]: SidebarItem,
    [Row.name]: Row,
    [Col.name]: Col,
    CateItem
  },
  data() {
    return {
      activeKey: 0,
      res: [
        { img: require("assets/img/cate/1.webp"), tit: "卫衣" },
        { img: require("assets/img/cate/2.webp"), tit: "短袖" },
        { img: require("assets/img/cate/3.webp"), tit: "衬衫" }
      ]
    };
  },
  methods: {
    onChange(index) {
      // if (index == 1) {
      //   Notify({ type: "primary", message: "a" });
      // }
      switch (index) {
        case 0:
          this.res = [
            { img: require("assets/img/cate/1.webp"), tit: "卫衣" },
            { img: require("assets/img/cate/2.webp"), tit: "短袖" },
            { img: require("assets/img/cate/3.webp"), tit: "衬衫" }
          ];
          break;
        case 1:
          this.res = [
            { img: require("assets/img/cate/4.webp"), tit: "休闲裤" },
            { img: require("assets/img/cate/5.webp"), tit: "牛仔裤" },
            { img: require("assets/img/cate/6.webp"), tit: "阔腿裤" }
          ];
          break;
        case 2:
          this.res = [
            { img: require("assets/img/cate/7.webp"), tit: "连衣裙" },
            { img: require("assets/img/cate/8.webp"), tit: "长裙" },
            { img: require("assets/img/cate/9.webp"), tit: "碎花裙" }
          ];
          break;
      }
    }
  }
};
</script>

<style scoped>
.bar {
  background: var(--color-tint);
}
.van-nav-bar__title {
  color: #fff;
}
.left {
  height: calc(100vh - 95px);
  background: #f7f8fa;
}
.right {
  width: calc(100vw - 85px);
  height: calc(100vh - 95px);
  padding: 10px;
  text-align: center;
}
</style>