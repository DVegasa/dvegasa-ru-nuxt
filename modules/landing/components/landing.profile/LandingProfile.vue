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
.LandingProfile {
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .top {
    .name {
      font-size: 52px;
      font-weight: 400;
      margin-bottom: 5px;
    }

    .subtitle {
      font-size: 22px;
      color: rgba(255, 255, 255, 0.75);
      font-weight: 400;

      margin-bottom: 40px;
    }
  }

  .contacts {
    position: absolute;
    left: 100px;
    bottom: 40px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    .contactButtons {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;
    }
  }
}
</style>
