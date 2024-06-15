<template>
  <div class="LandingPageHome">
    <ui-all-screen>
      <landing-profile />
    </ui-all-screen>
  </div>
</template>

<script setup lang="ts">
import UiAllScreen from '~/modules/ui/components/ui.AllScreen/UiAllScreen.vue';
import LandingProfile from '~/modules/landing/components/landing.profile/LandingProfile.vue';
</script>

<style lang="scss">
@import '@/assets/styles/index.scss';
@import '@/assets/styles/responsive';

.LandingPageHome {
  position: relative;
  padding-left: 100px;
  padding-right: 100px;

  @include screen-tablet {
    padding-left: 50px;
    padding-right: 50px;
  }

  @include screen-phone {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
