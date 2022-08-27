<template>
  <div class="timer">
    <template v-if="!allPassed">
      <p class="timer__item">{{ nextPrayerEnglish }} in</p>
      <p class="timer__item timer--time">{{ timeLeft }}</p>
    </template>
    <template v-else>
      <p class="timer__item">All prayers passed</p>
    </template>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  allPassed: { type: Boolean, required: true },
  nextPrayerEnglish: { type: String, required: true },
  timeLeft: { type: String, required: true }
});
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
