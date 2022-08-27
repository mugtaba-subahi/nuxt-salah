<template>
  <div class="timer">
    <p class="timer__item" v-if="isFinished">{{ prayers[nextIndex].english }} in</p>
    <p class="timer__item timer--time" v-if="isFinished">{{ timeLeft }}</p>
    <p class="timer__item" v-else>All prayers passed</p>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { IPrayer } from "!interfaces";

defineProps({
  isFinished: { type: Boolean, required: true },
  prayers: { type: Object as PropType<IPrayer[]>, required: true },
  nextIndex: { type: Number, required: true },
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
