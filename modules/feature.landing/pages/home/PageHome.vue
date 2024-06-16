<template>
  <div class="LandingPageHome">
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

}
</style>
