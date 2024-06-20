<template>
  <div class="LandingName">
    <div class="top">
      <div class="name">
        {{ $t('landing.profile.name') }}
      </div>
      <div class="subtitle">
        {{ $t('landing.profile.subtitle') }}
      </div>

      <NuxtLink
        id="link-cv"
        :aria-label="$t('landing.profile.ariaCv')"
        to="/cv"
      >
        <ui-button
          aria-labelledby="link-cv"
          role="none"
          tabindex="-1"
          type="primary"
        >
          {{ $t('landing.profile.cv') }}
        </ui-button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UiButton from '~/modules/feature.ui/components/ui.button/UiButton.vue';
</script>

<style lang="scss" scoped>
@import 'assets/styles/responsive';

.LandingName {
  .top {
    width: 100%;
    text-align: left;

    .name {
      margin-bottom: 0.06em;
      font-size: 52px;

      @include screen-tablet {
        font-size: 46px;
      }

      @include screen-phone {
        font-size: 32px;
      }
    }

    .subtitle {
      margin-bottom: 2.2em;
      color: rgba(255, 255, 255, 0.75);
      font-size: 22px;
      font-weight: 400;

      @include screen-tablet {
        font-size: 20px;
      }

      @include screen-phone {
        font-size: 16px;
      }
    }
  }
}
</style>
