<script lang="ts" setup>
const features = [
  {
    icon: 'i-custom:shield-check',
    title: 'Максимальная безопасность',
    description: 'Включена токенизация данных и защита от мошенничества',
  },
  {
    icon: 'i-custom:rocket-launch',
    title: 'Мгновенная обработка платежей',
    description: 'Среднее время обработки платежа — менее 2 секунд. Без задержек и простоев',
  },
  {
    icon: 'i-custom:chart-bar',
    title: 'Детальная аналитика',
    description: 'Подробные отчеты, статистика в реальном времени, экспорт данных в дашборде',
  },
  {
    icon: 'i-custom:phone',
    title: 'Поддержка 24/7',
    description: 'Русскоязычная техподдержка круглосуточно. Telegram, Email, Телефон',
  },
  {
    icon: 'i-custom:lock-closed',
    title: 'Защита данных',
    description: 'AES-256 шифрование, двухфакторная аутентификация, регулярные аудиты',
  },
  {
    icon: 'i-custom:globe-alt',
    title: 'Мультивалютность',
    description: 'Поддержка KGS, USD, EUR и других валют с автоконвертацией',
  },
  {
    icon: 'i-custom:wrench-screwdriver',
    title: 'Webhooks и API',
    description: 'REST API, вебхуки, SDK для популярных языков программирования',
  },
  {
    icon: 'i-custom:folder-open',
    title: 'Готовые модули',
    description: 'Интеграция в ваш бизнес по API и плагинам',
  },
]
</script>

<template>
  <section id="features" class="relative overflow-hidden py-3xl">
    <!-- Background Glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5F94FF]/20 blur-[250px]"
    />

    <UContainer class="relative z-10 flex flex-col items-center">
      <div class="mb-2xl flex w-full flex-col items-start gap-6">
        <InfoChip icon="i-custom:arrows-right-left">
          ВОЗМОЖНОСТИ
        </InfoChip>
        <div class="flex flex-col">
          <h2 class="mb-sm text-h1">
            Предоставим всё необходимое для надежного приема оплат
          </h2>
          <p class="mb-lg text-body-l">
            Внедрим надежную инфраструктуру и современные инструменты для приема платежей
          </p>
        </div>
        <ul
          class="
            grid w-full grid-cols-1 gap-4
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          <li v-for="feature in features" :key="feature.title">
            <InfoCard
              class="h-full"
              :icon="feature.icon"
              :title="feature.title"
              :description="feature.description"
            />
          </li>
        </ul>
      </div>
      <UButton class="self-center" @click="openContactModal">
        Оставить заявку на подключение
      </UButton>
    </UContainer>
  </section>
</template>
