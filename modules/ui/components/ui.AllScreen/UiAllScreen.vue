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
  min-width: 100vw;
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  position: relative;

  > * {
    height: 100vh;
    width: 100%;
  }
}
</style>
