<template>
  <div class="LandingContactMe">
    <div class="contactMe">
      {{ $t('landing.profile.contactMe') }}
    </div>
    <div class="contactButtons">
      <NuxtLink
        id="btn-telegram"
        :to="ExternalUrls.telegram"
        external
        :aria-label="$t('landing.profile.ariaContactByTelegram')"
      >
        <ui-button
          icon="only"
          role="none"
          tabindex="-1"
          aria-labelledby="btn-telegram"
        >
          <telegram-icon />
        </ui-button>
      </NuxtLink>

      <NuxtLink
        id="btn-linkedin"
        :to="ExternalUrls.linkedin"
        external
        :aria-label="$t('landing.profile.ariaContactByLinkedin')"
      >
        <ui-button
          icon="only"
          role="none"
          tabindex="-1"
          aria-labelledby="btn-linkedin"
        >
          <linkedin-icon />
        </ui-button>
      </NuxtLink>

      <NuxtLink
        id="btn-github"
        :to="ExternalUrls.github"
        external
        :aria-label="$t('landing.profile.ariaContactByGithub')"
      >
        <ui-button
          icon="only"
          role="none"
          tabindex="-1"
          aria-labelledby="btn-github"
        >
          <github-icon name="github" />
        </ui-button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import telegramIcon from './assets/telegram.svg';
import linkedinIcon from './assets/linkedin.svg';
import githubIcon from './assets/github.svg';
import { ExternalUrls } from '~/modules/core.redirects/external-urls';
import UiButton from '~/modules/feature.ui/components/ui.button/UiButton.vue';
</script>

<style lang="scss">
@import 'assets/styles/responsive';

.LandingContactMe {
  display: flex;
  flex-direction: column;

  .contactMe {
    font-weight: 300;
    color: rgba(255, 255, 255, 0.75);
    padding-bottom: 1.25em;
    font-size: 14px;

    @include screen-tablet {
      font-size: 14px;
    }

    @include screen-phone {
      font-size: 14px;
    }
  }

  .contactButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75em;
  }
}
</style>
