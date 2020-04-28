<template>
  <div class="home-btn1">
    <a :href="item.link" v-for="(item, index) in recommends" :key="index">
      <img :src="item.image" alt />
      <p>{{item.title}}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeBtn1",
  props: {
    recommends: {
      type: Array,
      default: {
        return: []
      }
    }
  }
};
</script>

<style>
.home-btn1 {
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.home-btn1 a {
  flex: 1;
}
.home-btn1 img {
  width: 70px;
}
.home-btn1 p {
  margin: 5px;
}
</style>