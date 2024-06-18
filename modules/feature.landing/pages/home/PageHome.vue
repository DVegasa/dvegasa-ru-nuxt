<template>
  <div class="LandingPageHome">
    <landing-gradient-green />
    <landing-gradient-black />

    <ui-all-screen>
      <div class="wrapper">
        <landing-name />
        <landing-contact-me />

        <ui-button
          type="text"
          class="switchLang"
          @click="switchLanguage"
        >
          {{ $t('landing.switchLang') }}
        </ui-button>
      </div>
    </ui-all-screen>
  </div>
</template>

<script setup lang="ts">
import UiAllScreen from '~/modules/feature.ui/components/ui.AllScreen/UiAllScreen.vue';
import LandingName from '~/modules/feature.landing/components/landing.name/LandingName.vue';
import LandingContactMe from '~/modules/feature.landing/components/landing.contactMe/LandingContactMe.vue';
import UiButton from '~/modules/feature.ui/components/ui.button/UiButton.vue';
import LandingGradientGreen from '~/modules/feature.landing/components/landing.gradientGreen/LandingGradientGreen.vue';
import LandingGradientBlack from '~/modules/feature.landing/components/landing.gradientBlack/LandingGradientBlack.vue';

const i18n = useI18n();
function switchLanguage(): void {
  if (i18n.locale.value === 'ru') {
    i18n.locale.value = 'en';
  } else {
    i18n.locale.value = 'ru';
  }
}
</script>

<style lang="scss">
@import 'assets/styles/index';
@import 'assets/styles/responsive';

.LandingPageHome {
  position: relative;
  padding-left: 100px;
  padding-right: 100px;
  height: 100%;

  @include screen-tablet {
    padding-left: 50px;
    padding-right: 50px;
  }

  @include screen-phone {
    padding-left: 20px;
    padding-right: 20px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    z-index: 10;
  }

  .LandingContactMe {
    position: absolute;
    left: 0;
    bottom: 2em;

    @include screen-phone {
      padding-bottom: 10px;
    }
  }

  .switchLang {
    position: absolute;
    top: 40px;
    right: -60px;

    @include screen-tablet {
      top: 20px;
      right: -40px;
    }

    @include screen-phone {
      top: 10px;
      right: -20px;

      font-size: 12px !important;
    }
  }

  .LandingGradientGreen {
    position: absolute;
    top: -1000px;
    right: -1300px;
    bottom: 0;
    height: 2500px;
    width: 2500px;
    transform: rotate(-25deg);
    padding: 50px;

    @include screen-tablet {
      right: -1300px;
      top: -700px;
      height: 2000px;
      width: 2000px;
    }

    @include screen-phone {
      right: -900px;
      top: -500px;
      height: 1500px;
      width: 1500px;
      transform: rotate(-75deg);
    }
  }

  .LandingGradientBlack {
    position: absolute;
    padding: 50px;
    transform: rotate(25deg);
    height: 1600px;
    width: 1600px;
    top: -800px;
    left: -900px;
  }
}
</style>
