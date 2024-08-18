<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="home">
    <a-button type="primary">Primary Button</a-button>
    <div class="main">123</div>
  </div>
  <RouterView />
</template>

<style lang="scss" scoped>
.home {
  .main {
    color: red;
  }
}
</style>
