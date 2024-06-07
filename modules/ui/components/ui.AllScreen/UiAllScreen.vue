<template>
  <div class="UiAllScreen">
    <slot class="slot" />
  </div>
</template>


<script setup lang="ts">
</script>


<style lang="scss">
.UiAllScreen {
  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;
  position: relative;

  > * {
    height: 100vh;
    width: 100%;
  }
}
</style>
