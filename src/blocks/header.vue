<script>
import { defineComponent } from "vue";

// defineComponent 这个api用处1：封装了setup函数，2：提供了ts的语法提示
export default defineComponent({
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const {avatar = {}, tags = [], menu = []} = props.config
    return {
      avatar,
      tags,
      menu
    };
  },
});
</script>
<template>
  <a-page-header class="b-header" style="border: 1px solid rgb(235, 237, 240)">
    <!-- 标题 -->
    <template #title>
      <a-avatar :src="avatar.src" :size="avatar.size" :shape="avatar.shape"> </a-avatar>
    </template>
    <!-- 标题旁边的tags -->
    <template #tags>
      <a-tag :color="item.color" v-for="item of tags" :key="item.text">{{item.text}}</a-tag>
    </template>
    <!-- 右侧的内容 -->
     <template #extra>
        <a-button v-for="item of menu" :key="item.text" :type="item.type" @click="item.handle">{{item.text}}</a-button>
     </template>
  </a-page-header>
</template>
<style lang="scss" scoped>
.b-header {
  position: sticky;
  top:0;
  z-index: 99;
  padding: 10px;
  transition: all 0.3s ease-in-out;
}
.b-header:hover {
  transition: all 0.3s ease-in-out;
  background-color:rgba(255,255,255,0.9);
  box-shadow:0px 4px 8px rgba(0,0,0,0.04);
}
.b-header[isscroll="true"] {
  transition: all 0.3s ease-in-out;
  background-color:■rgba(255,255,255,0.9);
  box-shadow:0px 4px 8px rgba(0, 0, 0, 0.04);
}
::v-deep .ant-page-header-heading-extra {
  margin-top:15px;
}
</style>
