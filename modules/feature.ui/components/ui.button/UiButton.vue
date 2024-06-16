<template>
  <button :class="['UiButton', `_type-${props.type}`, props.icon && `_icon-${props.icon}`]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ButtonIcon } from '~/modules/feature.ui/components/ui.button/enums';
import { ButtonTypes } from '~/modules/feature.ui/components/ui.button/enums';

const props = defineProps({
  type: {
    type: String as () => ButtonTypes,
    default: ButtonTypes.default,
  },
  icon: {
    type: String as () => ButtonIcon,
    default: null,
  },
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

  padding: 0.66em 1.2em;
  border-radius: 3px;

  transition: all ease-in-out 0.15s;

  letter-spacing: 0;

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

      @include screen-tablet {
        font-size: 16px;
      }

      @include screen-phone {
        font-size: 14px;
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

      @include screen-tablet {
        font-size: 16px;
      }

      @include screen-phone {
        font-size: 14px;
      }
    }

    &text {
      color: $color-white;
      font-size: 14px;
      letter-spacing: .05em;
      font-weight: 400;
      opacity: 0.75;

      &:hover {
        opacity: 1;
      }
    }
  }

  &._icon- {
    &only {
      padding: 0.5em 0.5em;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;

      &:active {
        transform: scale(0.75) !important;
      }

      @include screen-tablet {
        font-size: 24px;
      }

      @include screen-phone {
        font-size: 22px;
      }
    }
  }
}
</style>
