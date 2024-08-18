<script>
import { Avatar } from "ant-design-vue";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      avatarImg: {
        // vite 本身不是支持require， 只支持import，一般vite用这种方式import图片
        src: new URL("@/assets/avator.jpg", import.meta.url).href,
      },
    };
  },
});
</script>
<template>
  <a-page-header class="site-page-header">
    <template #title>
      <a-avatar :src="avatarImg.src" :size="64" shape="square"> </a-avatar>
    </template>
    <!-- <template></template> -->
  </a-page-header>
</template>
<style>
.header {
  color: red;
}
</style>
