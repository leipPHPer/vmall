<template>
  <div class="tab">
    <div class="tab-item" v-for="(item, index) in tabArr" :key="index">
      <span class="tab-text" :class="{active:index===num}" @click="tabActive(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    tabArr: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      num: 0
    };
  },
  methods: {
    tabActive(index) {
      this.num = index;
      // index传到home，点击切换数据
      this.$emit("tabActive", index);
    }
  }
};
</script>

<style>
.tab {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  font-size: 15px;
  background: #fff;
}
.tab-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
  padding: 3px;
  border-bottom: 3px solid var(--color-high-text);
}
</style>