<template>
  <div class="LandingProfile">
    <div class="top">
      <div class="name">Эдуард Халтурин</div>
      <div class="subtitle">продуктовый full-stack разработчик </div>

      <ui-button type="primary">Посмотреть резюме</ui-button>
    </div>

    <div class="contacts">
      <div class="contactMe">связаться со мной</div>
      <div class="contactButtons">
        <ui-button icon="only"><nuxt-icon name="telegram"/> </ui-button>
        <ui-button icon="only"><nuxt-icon name="linkedin"/></ui-button>
        <ui-button icon="only"><nuxt-icon name="github"/></ui-button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import UiButton from "~/modules/ui/components/ui.button/UiButton.vue";
</script>


<style scoped lang="scss">
@import '@/assets/styles/responsive';

.LandingProfile {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .top {
    text-align: left;

    .name {
      font-size: 52px;
      font-weight: 400;
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
      margin-bottom: 1.9em;

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
      font-weight: 400;
      color: rgba(255, 255, 255, 0.75);
      padding-bottom: 1.25em;

      @include screen-tablet {
        font-size: 16px;
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
