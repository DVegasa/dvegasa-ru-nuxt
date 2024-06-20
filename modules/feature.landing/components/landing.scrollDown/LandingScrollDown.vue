<template>
  <div class="LandingScrollDown">
    <div class="text">
      {{ $t('landing.scrollDown.scrollDown') }}
    </div>
    <arrow-icon class="arrow" />
  </div>
</template>

<script lang="ts" setup>
import arrowIcon from './assets/arrow.svg';
</script>

<style lang="scss">
.LandingScrollDown {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  gap: 0.75em;

  .arrow {
    height: 50px;
    margin-left: 4px;
  }

  .text {
    opacity: 0.66;
    font-size: 13px;
    font-weight: 300;
    transform: rotate(180deg);
    letter-spacing: 0.05em;
    text-wrap: nowrap;
    writing-mode: vertical-lr;
  }
}
</style>
