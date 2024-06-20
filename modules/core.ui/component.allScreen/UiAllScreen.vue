<template>
  <div class="UiAllScreen">
    <slot class="slot" />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.UiAllScreen {
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  position: relative;
}
</style>
