<template>
  <div>
    <div class="item" v-for="(item, index) in cateRes" :key="index">
      <!-- <img :src="require(item.img)" alt /> -->
      <img :src="item.img" alt />
      <p>{{item.tit}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CateItem",
  props: {
    cateRes: {
      type: Array,
      default() {
        return "";
      }
    }
  },
  computed:{
    imgPath(img){
      console.log(img);
      
      return require("assets/img/cate/"+img);
    }
  }
};
</script>

<style scoped>
.item {
  display: inline-block;
  width: 80px;
  padding: 10px;
}
img {
  width: 100%;
}
p{
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
</style>