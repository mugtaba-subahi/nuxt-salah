<template>
  <div class="timer">
    <template v-if="!!nextPrayer">
      <p class="timer__item">{{ nextPrayer.english }} in</p>
      <p class="timer__item timer--time">{{ timeLeft }}</p>
    </template>
    <template v-else>
      <p class="timer__item">All prayers passed</p>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { IPrayerNullable } from "~~/interfaces";



const { nextPrayer, timeLeft } = defineProps<ITimerProps>();
</script>

<style lang="postcss" scoped>
.timer {
  @apply mb-8 grid justify-items-center;

  &__item {
    @apply opacity-50 text-sm;
  }

  &--time {
    @apply opacity-100 text-2xl;
  }
}
</style>
