<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

interface FaqItem extends AccordionItem {
  description?: string
  list?: string[]
}

const questions: FaqItem[] = [
  {
    label: 'Как подключить прием платежей?',
    description: 'Для подключения необходимо:',
    list: [
      'Оставить заявку',
      'Предоставить документы компании',
      'Подписать договор',
      'Получить доступ к API и личному кабинету',
    ],
    slot: 'content',
  },
  {
    label: 'Какие способы оплаты поддерживаются?',
    description: 'Поддерживаются:',
    list: [
      'Visa/MasterCard/Элкарт',
      'QR-платежи',
      'Мобильные платежи',
    ],
    slot: 'content',
  },
  {
    label: 'Есть ли API для интеграции?',
    content: 'Да, мы предоставляем REST API и техническую документацию для интеграции',
  },
  {
    label: 'Сколько времени занимает подключение бизнеса?',
    content: 'Обычно подключение занимает от 1 до 5 рабочих дней в зависимости от типа бизнеса и полноты документов',
  },
  {
    label: 'Какие документы нужны для подключения?',
    description: 'Стандартный список:',
    list: [
      'Регистрационные документы компании',
      'Лицензии (если требуются)',
      'Реквизиты компании',
      'Данные директора/уполномоченного лица',
    ],
    slot: 'content',
  },
  {
    label: 'С какими бизнесами вы работаете?',
    description: 'Мы работаем с:',
    list: [
      'Интернет-магазинами',
      'Маркетплейсами',
      'Финтех-сервисами',
      'SaaS-платформами',
      'Службами доставки',
      'Образовательными сервисами',
      'Туризмом и гостиничным бизнесом',
    ],
    slot: 'content',
  },
]
</script>

<template>
  <section id="faq" class="relative overflow-hidden py-3xl">
    <!-- Background Glow -->
    <div
      class="pointer-events-none absolute -right-40 top-1/2 size-[600px] -translate-y-1/2 rounded-full bg-[#5CC6FF]/20 blur-[250px]"
    />

    <UContainer class="relative z-10 flex flex-col items-start">
      <div class="mb-2xl flex flex-col items-start gap-6">
        <InfoChip icon="i-custom:arrows-right-left">
          FAQ
        </InfoChip>
        <div class="flex flex-col">
          <h2 class="mb-sm text-h1">
            Ответим на часто задаваемые вопросы
          </h2>
        </div>
      </div>

      <div
        class="
          relative flex w-full flex-col items-start gap-md overflow-hidden
          rounded-radius-m bg-surface-secondary p-md
        "
      >
        <UAccordion
          :items="questions"
          variant="none"
          size="xl"
          :ui="{ label: 'text-h3' }"
        >
          <template #content="{ item }">
            <div class="flex flex-col gap-2 pb-md">
              <p v-if="item.description" class="text-text-secondary">
                {{ item.description }}
              </p>
              <ul v-if="item.list" class="flex flex-col gap-1">
                <li
                  v-for="line in item.list"
                  :key="line"
                  class="flex items-center gap-3 text-text-secondary"
                >
                  <span
                    class="
                      flex size-1.5 shrink-0 rounded-full bg-text-secondary
                    "
                  />
                  <span>{{ line }}</span>
                </li>
              </ul>
              <p v-else-if="item.content" class="text-text-secondary">
                {{ item.content }}
              </p>
            </div>
          </template>
        </UAccordion>
      </div>
    </UContainer>
  </section>
</template>
