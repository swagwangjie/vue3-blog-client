<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import BHeader from "@/blocks/header.vue";
import { appViewConfig } from "@/view-provider/app";
export default {
  components: {
    BHeader,
  },
  setup() {
    return {
      appViewConfig
    }
  }
};
</script>

<template>
  <b-header :config="appViewConfig"></b-header>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
.home {
  .main {
    color: red;
  }
}
</style>
