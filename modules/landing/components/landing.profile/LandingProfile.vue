<template>
  <div class="LandingProfile">
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

    <div class="contacts">
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
            <nuxt-icon name="telegram" />
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
            <nuxt-icon name="linkedin" />
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
            <nuxt-icon name="github" />
          </ui-button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiButton from '~/modules/ui/components/ui.button/UiButton.vue'
import { ExternalUrls } from '~/modules/redirects/external-urls'
</script>

<style scoped lang="scss">
@import '@/assets/styles/responsive';

.LandingProfile {
  display: flex;
  flex-direction: column;
  justify-content: center;

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

  .contacts {
    position: absolute;
    left: 0;
    bottom: 2em;

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
}
</style>
