<template>
  <div class="timer">
    <template v-if="!!props.nextPrayer">
      <p class="timer__item">{{ props.nextPrayer.english }} in</p>
      <p class="timer__item timer--time">{{ props.timeLeft }}</p>
    </template>
    <template v-else>
      <p class="timer__item">All prayers passed</p>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { CountDown } from "!interfaces";

const { props } = defineProps({ props: Object as PropType<CountDown> });
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
