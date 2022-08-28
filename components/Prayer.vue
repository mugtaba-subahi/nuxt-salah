<template>
  <div class="prayer" :class="{ passed: passed, isNext: isNext }">
    <p class="prayer__item prayer__item--english">{{ english }}</p>
    <p class="prayer__item prayer__item--time">{{ time }}</p>
    <p class="prayer__item prayer__item--arabic">{{ arabic }}</p>
  </div>
</template>

<script lang="ts" setup>
interface IPrayerProps {
  english: string;
  time: string;
  arabic: string;
  passed: boolean;
  isNext: boolean;
}

const { english, time, arabic, passed, isNext } = defineProps<IPrayerProps>();
</script>

<style lang="postcss" scoped>
.prayer {
  @apply grid grid-cols-3 justify-items-center text-lg rounded px-5 opacity-50 duration-300;

  &__item {
    @apply py-3 justify-items-center;

    &--english {
      @apply justify-self-start;
    }

    &--arabic {
      @apply justify-self-end leading-6 text-xl;
    }
  }
}

.isNext,
.passed {
  @apply opacity-100;
}

.isNext {
  background-color: #0d6cda;
}
</style>
