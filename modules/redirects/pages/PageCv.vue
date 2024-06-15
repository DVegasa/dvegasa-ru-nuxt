<template>
  <div class="PageCv" />
</template>

<script setup lang="ts">
import { ExternalUrls } from '~/modules/redirects/external-urls'

await navigateTo(ExternalUrls.cv, {
  external: true,
})
</script>

<style lang="scss">
.PageCv {

}
</style>
