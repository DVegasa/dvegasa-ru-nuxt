<template>
  <div class="LandingPageHome">
    <landing-gradient-green />
    <landing-gradient-black />

    <ui-all-screen>
      <div class="wrapper">
        <landing-name />
        <landing-contact-me />
      </div>

      <ui-button
        class="switchLang"
        type="text"
        @click="switchLanguage"
      >
        {{ $t('landing.switchLang') }}
      </ui-button>

      <landing-scroll-down />
    </ui-all-screen>
  </div>
</template>

<script lang="ts" setup>
import UiAllScreen from '~/modules/core.ui/component.allScreen/UiAllScreen.vue';
import LandingName from '~/modules/feature.landing/component.name/LandingName.vue';
import LandingContactMe from '~/modules/feature.landing/component.contactMe/LandingContactMe.vue';
import UiButton from '~/modules/core.ui/component.button/UiButton.vue';
import LandingScrollDown from '~/modules/feature.landing/component.scrollDown/LandingScrollDown.vue';
import LandingGradientGreen from '~/modules/feature.landing/component.gradientGreen/LandingGradientGreen.vue';
import LandingGradientBlack from '~/modules/feature.landing/component.gradientBlack/LandingGradientBlack.vue';

const i18n = useI18n();

function switchLanguage(): void {
  if (i18n.locale.value === 'ru') {
    i18n.locale.value = 'en';
  } else {
    i18n.locale.value = 'ru';
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/index';
@import 'assets/styles/responsive';

.LandingPageHome {
  height: 100%;
  position: relative;
  overflow: clip;
  --padding-bottom: 2em;

  --padding-right: 2em;
  --padding-left: 5em;
  --padding-top: 2em;

  @include screen-tablet {
    --padding-bottom: 2em;
    --padding-right: 2em;
    --padding-left: 3em;
    --padding-top: 2em;
  }

  @include screen-phone {
    --padding-bottom: 3em;
    --padding-right: 1em;
    --padding-left: 2em;
    --padding-top: 1em;
  }

  .UiAllScreen {
    padding: var(--padding-top) var(--padding-right) var(--padding-bottom) var(--padding-left);
  }

  .wrapper {
    height: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .LandingContactMe {
    position: absolute;
    bottom: var(--padding-bottom);
    left: var(--padding-left);
  }

  .switchLang {
    position: absolute;
    top: var(--padding-top);
    right: var(--padding-right);

    @include screen-phone {
      font-size: 12px !important;
    }
  }

  .LandingScrollDown {
    position: absolute;
    right: calc(var(--padding-right) + 10px);
    bottom: var(--padding-bottom);
  }

  .LandingGradientGreen {
    width: 2500px;
    height: 2500px;
    position: absolute;
    top: -1000px;
    right: -1300px;
    bottom: 0;
    padding: 50px;
    transform: rotate(-25deg);

    @include screen-tablet {
      width: 2000px;
      height: 2000px;
      top: -700px;
      right: -1300px;
    }

    @include screen-phone {
      width: 1500px;
      height: 1500px;
      top: -500px;
      right: -950px;
      transform: rotate(-55deg);
    }
  }
}
</style>
