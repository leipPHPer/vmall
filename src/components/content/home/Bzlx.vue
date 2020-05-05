<template>
  <div class="bzlx">
    <van-row type="flex" justify="center" class="t">
      <span >本周流行</span>
    </van-row>
    <van-row>
      <van-col span="6">
        <div class="box">
          <img src="~assets/img/home/1.webp" alt="">
          <span class="title">女装</span>
        </div>
      </van-col>
      <van-col span="6">
        <div class="box">
          <img src="~assets/img/home/2.webp" alt="">
          <span class="title">上衣</span>
        </div>
      </van-col>
      <van-col span="6">
        <div class="box">
          <img src="~assets/img/home/3.webp" alt="">
          <span class="title">裤子</span>
        </div>
      </van-col>
      <van-col span="6">
        <div class="box">
          <img src="~assets/img/home/4.webp" alt="">
          <span class="title">裙子</span>
        </div>
      </van-col>
    </van-row>
    <van-row gutter="20" justify="center">
      <van-col span="6">
        <div class="box">
          <img src="~assets/img/home/5.webp" alt="">
          <span class="title">套装</span>
        </div>
      </van-col>
      <van-col span="6">
        <div class="box">
          <img src="~assets/img/home/6.webp" alt="">
          <span class="title">女鞋</span>
        </div>
      </van-col>
      <van-col span="6">
        <div class="box">
          <img src="~assets/img/home/7.webp" alt="">
          <span class="title">美装</span>
        </div>
      </van-col>
      <van-col span="6">
        <div class="box">
          <img src="~assets/img/home/8.webp" alt="">
          <span class="title">包包</span>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Col, Row } from "vant";

export default {
  name: "Bzlx", // 本周流行
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  }
};
</script>

<style scoped>
.title {
  line-height: 30px;
  height: 30px;
}
.bzlx img{
  width: 100%;
}
.box {
  text-align: center;
}
.t {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
}
</style>