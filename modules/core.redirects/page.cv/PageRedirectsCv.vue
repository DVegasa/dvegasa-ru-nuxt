<template>
  <div class="PageCv" />
</template>

<script lang="ts" setup>
import { ExternalUrls } from '~/modules/core.redirects/external-urls';

await navigateTo(ExternalUrls.cv, {
  external: true,
});
</script>

<style lang="scss" scoped>
.PageCv {

}
</style>
