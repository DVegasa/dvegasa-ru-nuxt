<template>
  <div class="LandingScrollDown">
    <div class="text">
      {{ $t('landing.scrollDown.scrollDown') }}
    </div>
    <arrow-icon class="arrow" />
  </div>
</template>

<script setup lang="ts">
import arrowIcon from './assets/arrow.svg';
</script>

<style lang="scss">
.LandingScrollDown {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75em;
  user-select: none;

  .arrow {
    margin-left: 4px;
    height: 50px;
  }

  .text {
    opacity: 0.66;
    text-wrap: nowrap;
    font-weight: 300;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    font-size: 13px;
    letter-spacing: 0.05em;
  }
}
</style>
