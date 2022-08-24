<template>
  <div class="spinner">
    <orbit-spinner :animation-duration="1000" :size="35" color="white" />
  </div>
</template>

<script lang="ts" setup>
import { OrbitSpinner } from "epic-spinners";
</script>

<style lang="postcss" scoped>
.spinner {
  @apply absolute grid h-full w-full top-0 left-0 justify-items-center items-center;
}
</style>
