<template>
  <button :class="['UiButton', `_type-${props.type}`, props.icon && `_icon-${props.icon}`]">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import type { ButtonIcon } from '~/modules/core.ui/component.button/enums';
import { ButtonTypes } from '~/modules/core.ui/component.button/enums';

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

<style lang="scss" scoped>
@use 'sass:color';
@import 'assets/styles/index';

.UiButton {
  padding: 0.66em 1.2em;
  color: inherit;
  font: inherit;
  cursor: pointer;
  transition: all ease-in-out 0.15s;
  letter-spacing: 0;

  border: none;
  border-radius: 3px;

  outline: inherit;

  background: none;

  & * {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.96) !important;
  }

  &._type- {
    &default {
      color: $color-white;
      font-size: 16px;

      font-weight: 500;
      background-color: $color-black;

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
      color: $color-black;
      font-size: 16px;

      font-weight: bold;
      background-color: $color-green;

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
      opacity: 0.75;
      color: $color-white;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: .05em;

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
