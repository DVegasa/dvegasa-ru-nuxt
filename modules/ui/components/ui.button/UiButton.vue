<template>
  <button :class="['UiButton', `_type-${props.type}`, props.icon && `_icon-${props.icon}`]">
    <slot />
  </button>
</template>


<script setup lang="ts">
import {ButtonIcon, ButtonTypes} from "~/modules/ui/components/ui.button/enums";

const props = defineProps({
  type: {
    type: String as () => ButtonTypes,
    default: ButtonTypes.default,
  },
  icon: {
    type: String as () => ButtonIcon,
    default: null,
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

  & * {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.96) !important;
  }

  &._type- {
    &default {
      background-color: $color-black;
      color: $color-white;

      font-size: 16px;
      font-weight: 500;

      &:hover {
        background-color: color.scale($color-black, $lightness: 4%);
      }
    }

    &primary {
      background-color: $color-green;
      color: $color-black;

      font-size: 16px;
      font-weight: bold;

      &:hover {
        background-color: color.scale($color-green, $lightness: -15%);
      }
    }
  }


  &._icon- {
    &only {
      padding: 0;
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;

      &:active {
        transform: scale(0.75) !important;
      }
    }
  }
}
</style>
