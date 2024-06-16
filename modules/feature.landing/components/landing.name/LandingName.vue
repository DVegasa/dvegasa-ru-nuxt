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
        to="/cv"
        :aria-label="$t('landing.profile.ariaCv')"
      >
        <ui-button
          type="primary"
          role="none"
          tabindex="-1"
          aria-labelledby="link-cv"
        >
          {{ $t('landing.profile.cv') }}
        </ui-button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiButton from '~/modules/feature.ui/components/ui.button/UiButton.vue';
</script>

<style scoped lang="scss">
@import 'assets/styles/responsive';

.LandingName {
  .top {
    text-align: left;
    width: 100%;

    .name {
      font-size: 52px;
      margin-bottom: 0.06em;

      @include screen-tablet {
        font-size: 46px;
      }

      @include screen-phone {
        font-size: 32px;
      }
    }

    .subtitle {
      font-size: 22px;
      color: rgba(255, 255, 255, 0.75);
      font-weight: 400;
      margin-bottom: 2.2em;

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
