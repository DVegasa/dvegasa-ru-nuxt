<template>
  <div class="PageXp">
  </div>
</template>


<script setup lang="ts">
import {ExternalUrls} from "~/modules/redirects/external-urls";
await navigateTo(ExternalUrls.xp, {
  external: true
})
</script>


<style lang="scss">
.PageXp {

}
</style>
