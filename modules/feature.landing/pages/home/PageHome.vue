<template>
  <div class="LandingPageHome">
    <ui-all-screen>
      <div class="wrapper">
        <landing-name />
        <landing-contact-me />
      </div>

      <ui-button
        type="text"
        class="switchLang"
        @click="switchLanguage"
      >
        {{ $t('landing.switchLang') }}
      </ui-button>

      <landing-scroll-down />
    </ui-all-screen>
  </div>
</template>

<script setup lang="ts">
import UiAllScreen from '~/modules/feature.ui/components/ui.AllScreen/UiAllScreen.vue';
import LandingName from '~/modules/feature.landing/components/landing.name/LandingName.vue';
import LandingContactMe from '~/modules/feature.landing/components/landing.contactMe/LandingContactMe.vue';
import UiButton from '~/modules/feature.ui/components/ui.button/UiButton.vue';
import LandingScrollDown from '~/modules/feature.landing/components/landing.scrollDown/LandingScrollDown.vue';

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
  --padding-bottom: 2em;
  --padding-right: 2em;
  --padding-left: 5em;
  --padding-top: 2em;

  position: relative;
  height: 100%;

  @include screen-tablet {
    --padding-bottom: 2em;
    --padding-right: 2em;
    --padding-left: 3em;
    --padding-top: 2em;
  }

  @include screen-phone {
    --padding-bottom: 2em;
    --padding-right: 1em;
    --padding-left: 2em;
    --padding-top: 1em;
  }

  .UiAllScreen {
    padding: var(--padding-top) var(--padding-right) var(--padding-bottom) var(--padding-left);
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
    left: var(--padding-left);
    bottom: var(--padding-bottom);
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
}
</style>
