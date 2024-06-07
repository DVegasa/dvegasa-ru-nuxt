<template>
  <button :class="['UiButton', `_type-${props.type}`]">
    {{props.text}}
  </button>
</template>


<script setup lang="ts">
import {ButtonTypes} from "~/modules/ui/components/ui.button/button-types";

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  type: {
    type: ButtonTypes,
    default: ButtonTypes.default,
  }
});
</script>


<style scoped lang="scss">
@use 'sass:color';
@import '@/assets/styles/index.scss';

.UiButton {
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  padding: 10px 20px;
  border-radius: 3px;

  transition: all ease-in-out 0.15s;

  &_type-default {

  }

  &._type-primary {
    background-color: $color-green;
    color: $color-black;

    font-size: 16px;
    font-weight: bold;

    &:hover {
      background-color: color.scale($color-green, $lightness: -15%);
    }

    &:active {
      //transform: scale(0.98);
      transform: translateY(2px);
    }
  }
}
</style>
