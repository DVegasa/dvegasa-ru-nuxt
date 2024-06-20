<template>
  <div class="LandingContactMe">
    <div class="contactMe">
      {{ $t('landing.profile.contactMe') }}
    </div>
    <div class="contactButtons">
      <NuxtLink
        id="btn-telegram"
        :aria-label="$t('landing.profile.ariaContactByTelegram')"
        :to="ExternalUrls.telegram"
        external
      >
        <ui-button
          aria-labelledby="btn-telegram"
          icon="only"
          role="none"
          tabindex="-1"
        >
          <telegram-icon />
        </ui-button>
      </NuxtLink>

      <NuxtLink
        id="btn-linkedin"
        :aria-label="$t('landing.profile.ariaContactByLinkedin')"
        :to="ExternalUrls.linkedin"
        external
      >
        <ui-button
          aria-labelledby="btn-linkedin"
          icon="only"
          role="none"
          tabindex="-1"
        >
          <linkedin-icon />
        </ui-button>
      </NuxtLink>

      <NuxtLink
        id="btn-github"
        :aria-label="$t('landing.profile.ariaContactByGithub')"
        :to="ExternalUrls.github"
        external
      >
        <ui-button
          aria-labelledby="btn-github"
          icon="only"
          role="none"
          tabindex="-1"
        >
          <github-icon name="github" />
        </ui-button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import telegramIcon from './assets/telegram.svg';
import linkedinIcon from './assets/linkedin.svg';
import githubIcon from './assets/github.svg';
import { ExternalUrls } from '~/modules/core.redirects/external-urls';
import UiButton from '~/modules/core.ui/component.button/UiButton.vue';
</script>

<style lang="scss">
@import 'assets/styles/responsive';

.LandingContactMe {
  display: flex;
  flex-direction: column;

  .contactMe {
    padding-bottom: 1.25em;
    color: rgba(255, 255, 255, 0.75);
    font-size: 14px;
    font-weight: 300;

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
