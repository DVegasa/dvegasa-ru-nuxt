<template>
  <div class="PageXp" />
</template>

<script lang="ts" setup>
import { ExternalUrls } from '~/modules/core.redirects/external-urls';

await navigateTo(ExternalUrls.xp, {
  external: true,
});
</script>

<style lang="scss">
.PageXp {

}
</style>
