<template>
  <div class="goods-list">
    <a href class="item-a" v-for="(item, index) in goodsList" :key="index">
      <div>
        <img v-if="tabType == 'pop'" src="~assets/img/goods/1.jpg" alt />
        <img v-if="tabType == 'new'" src="~assets/img/goods/2.jpg" alt />
        <img v-if="tabType == 'sell'" src="~assets/img/goods/3.jpg" alt />
        <div class="item-d">
          <p>{{item.name}}</p>
          <p>{{item.price}}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeList",
  props: {
    'tabType': {
      type: String,
      default() {
        return "";
      }
    }
  },
  data() {
    return {
      goodsList: [
        {
          name: "棉2020夏季新款T恤女装短袖",
          price: "¥49"
        },
        {
          name: "棉2020夏季新款T恤女装短袖",
          price: "¥49"
        },
        {
          name: "棉2020夏季新款T恤女装短袖",
          price: "¥49"
        },
        {
          name: "棉2020夏季新款T恤女装短袖",
          price: "¥49"
        },
        {
          name: "棉2020夏季新款T恤女装短袖",
          price: "¥49"
        },
        {
          name: "棉2020夏季新款T恤女装短袖",
          price: "¥49"
        }
      ]
    };
  },
  methods: {
    switchData(){

    }
  }
};
</script>

<style>
.goods-list {
  background: #eee;
  /* margin: 0 auto; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item-a {
  display: inline-block;
  width: 43%;
  margin: 10px;
  background: #fff;
}
.item-d {
  padding: 10px;
}
.item-a img {
  width: 100%;
}
</style>