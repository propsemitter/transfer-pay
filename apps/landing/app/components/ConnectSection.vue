<script setup lang="ts">
const steps = [
  {
    icon: 'i-custom:document-text',
    title: 'Заполните заявку на сайте',
    description: 'Заполните короткую заявку или свяжитесь with нашим менеджером',
  },
  {
    icon: 'i-custom:cog',
    title: 'Получите доступ в личный кабинет',
    description: 'Получите доступ к личному кабинету и настройте параметры приема платежей',
  },
  {
    icon: 'i-custom:code-bracket',
    title: 'Интеграция системы в ваш бизнес',
    description: 'Интегрируйте нашу систему в свой бизнес, подключив API. Мы предоставим готовую документацию',
  },
  {
    icon: 'i-custom:document-text',
    title: 'Наслаждайтесь ростом продаж!',
    description: 'Начните принимать платежи. Деньги поступают на ваш счет моментально',
  },
]
</script>

<template>
  <section id="connect" class="relative overflow-hidden py-3xl">
    <!-- Background Glow -->
    <div
      class="pointer-events-none absolute -right-60 top-1/2 h-[600px] w-[900px] -translate-y-1/2 rounded-full bg-[#8CFFED]/20 blur-[250px]"
    />

    <UContainer class="relative z-10 flex flex-col items-center">
      <div class="mb-2xl flex w-full flex-col items-start gap-6">
        <InfoChip icon="i-custom:arrows-right-left">
          КАК ПОДКЛЮЧИТЬСЯ
        </InfoChip>
        <div class="flex flex-col">
          <h2 class="mb-sm text-h1">
            Оптимизируйте оплату в вашем бизнесе всего за 4 шага
          </h2>
          <p class="mb-lg text-body-l">
            Простой процесс подключения — от регистрации до первого платежа
          </p>
        </div>
      </div>

      <div
        class="
          mb-2xl grid w-full grid-cols-1 gap-4
          md:grid-cols-2
          lg:grid-cols-4
        "
      >
        <InfoCard
          v-for="(step, index) in steps" :key="step.title"
          class="h-full"
          :title="step.title"
          :description="step.description"
        >
          <template #header>
            <div class="flex w-full items-center justify-between">
              <span class="text-body-m">{{ index + 1 }}</span>
              <span
                class="
                  flex items-center justify-center rounded-radius-s
                  bg-surface-tertiary p-2
                "
              >
                <UIcon :name="step.icon" class="size-6" />
              </span>
            </div>
          </template>
        </InfoCard>
      </div>
      <UButton class="self-center" @click="openContactModal">
        Оставить заявку на подключение
      </UButton>
    </UContainer>
  </section>
</template>
