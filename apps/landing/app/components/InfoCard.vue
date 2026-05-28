<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon?: string
  image?: string
  gradient?: string
}>()
</script>

<template>
  <div
    class="
      relative flex flex-col items-start gap-md overflow-hidden rounded-radius-m
      bg-surface-secondary p-md
    "
  >
    <slot name="header">
      <span
        class="
          flex items-center justify-center rounded-radius-s bg-surface-tertiary
          p-2
        "
      >
        <UIcon :name="icon" class="size-6" />
      </span>
    </slot>
    <div class="flex flex-col">
      <b class="mb-sm text-h3">
        {{ title }}
      </b>
      <p class="text-body-l">
        {{ description }}
      </p>
    </div>
    <slot name="details" />
    <div :class="image ? 'mb-60' : 'mb-10'" />

    <template v-if="image">
      <span
        class="
          absolute -bottom-60 left-1/2 size-106.5 -translate-x-1/2 rounded-full
        "
        :class="gradient"
      />
      <NuxtImg
        :src="image" class="
          absolute -bottom-20 left-1/2 h-[70%] -translate-x-1/2
        "
      />
    </template>
  </div>
</template>
