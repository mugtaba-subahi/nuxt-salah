<template>
  <div class="prayer" :class="{ passed: prayer.passed, isNext: prayer.isNext }">
    <p class="prayer__item prayer__item--english">{{ prayer.english }}</p>
    <p class="prayer__item prayer__item--time">{{ prayer.time }}</p>
    <p class="prayer__item prayer__item--arabic">{{ prayer.arabic }}</p>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { PrayerItem } from "!interfaces";

const { prayer } = defineProps({ prayer: Object as PropType<PrayerItem> });
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
