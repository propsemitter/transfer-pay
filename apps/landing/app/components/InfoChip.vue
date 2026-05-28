<script setup lang="ts">
const { type = 'primary' } = defineProps<{
  icon: string
  type?: 'primary' | 'secondary'
}>()
</script>

<template>
  <div
    class="
      flex items-center gap-2 rounded-radius-m border border-surface-tertiary
      px-sm py-xs shadow-[0_2px_10px_0_rgba(0,0,0,0.02)]
    "
    :class="type === 'primary' ? 'bg-surface-secondary' : 'bg-status-success-bg'"
  >
    <UIcon
      class="size-4 shrink-0" :class="type === 'primary' ? 'text-text-primary' : `
        text-status-success-fg
      `
      " :name="icon"
    />
    <span
      class="block text-caption" :class="type === 'primary' ? `
        text-text-primary
      ` : `text-status-success-fg`"
    >
      <slot />
    </span>
  </div>
</template>
