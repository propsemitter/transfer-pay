<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const activeId = ref('')
const { y } = useWindowScroll()

const items = computed(() => [{
  label: 'Методы оплаты',
  to: '#methods',
  active: activeId.value === 'methods',
}, {
  label: 'Возможности',
  to: '#features',
  active: activeId.value === 'features',
}, {
  label: 'Лицензии',
  to: '#licenses',
  active: activeId.value === 'licenses',
}, {
  label: 'Как подключиться',
  to: '#connect',
  active: activeId.value === 'connect',
}, {
  label: 'FAQ',
  to: '#faq',
  active: activeId.value === 'faq',
}, {
  label: 'Связаться с нами',
  to: '#contact',
  active: activeId.value === 'contact',
}])

onMounted(() => {
  watch(y, () => {
    const sectionIds = ['methods', 'features', 'licenses', 'connect', 'faq', 'contact']
    const offset = 160 // Adjust based on your header height

    for (const id of [...sectionIds].reverse()) {
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= offset) {
          activeId.value = id
          return
        }
      }
    }
    activeId.value = ''
  }, { immediate: true })
})
</script>

<template>
  <UHeader>
    <template #title>
      <AppLogo />
    </template>

    <template #right>
      <UButton
        class="
          hidden shrink-0 cursor-pointer
          xl:block
        "
        @click="openContactModal"
      >
        Подключить сейчас
      </UButton>
      <UButton
        class="
          cursor-pointer
          xl:hidden
        "
        @click="openContactModal"
      >
        Подключить
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        variant="link"
        orientation="vertical"
      />
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />
  </UHeader>
</template>
