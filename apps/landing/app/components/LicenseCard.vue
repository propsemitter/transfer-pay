<script setup lang="ts">
defineProps<{
  image: string
  title: string
  description: string[]
  pdfUrl?: string
}>()
</script>

<template>
  <div
    class="
      relative flex flex-col items-start gap-md overflow-hidden rounded-radius-m
      bg-surface-secondary p-md
      lg:flex-row
    "
  >
    <div
      class="
        flex w-full items-center justify-center rounded-radius-m
        bg-surface-tertiary py-2
        lg:h-full
      "
    >
      <img
        :src="image" class="
          h-full max-w-36
          lg:h-auto
        "
      />
    </div>
    <div class="flex flex-col items-start">
      <InfoChip
        icon="i-custom:check-circle"
        type="secondary"
      >
        АКТИВНА
      </InfoChip>
      <div class="flex flex-col gap-sm">
        <b class="mb-sm text-h3">{{ title }}</b>
        <p class="text-body-l">
          {{ description[0] }}
        </p>
        <p class="text-body-l">
          {{ description[1] }}
        </p>
      </div>
      <UButton variant="soft">
        Посмотреть PDF-файл
      </UButton>
    </div>
  </div>
</template>
