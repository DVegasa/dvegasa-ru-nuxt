<template>
  <NuxtLayout name="layout-base">
    <yandex-metrica-counter />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import YandexMetricaCounter from "~/modules/yandex-metrica/components/yandex-metrica-counter/YandexMetricaCounter.vue";
</script>
