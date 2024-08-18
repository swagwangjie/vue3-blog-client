<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import BHeader from "@/blocks/header.vue";
export default {
  components: {
    BHeader,
  },
};
</script>

<template>
  <b-header></b-header>
  <!-- <RouterView /> -->
</template>

<style lang="scss" scoped>
.home {
  .main {
    color: red;
  }
}
</style>
