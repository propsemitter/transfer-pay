<script setup lang="ts">
</script>

<template>
  <section>
    <UContainer>
      <div
        class="
          relative flex flex-col items-start overflow-hidden rounded-radius-m
          bg-surface-secondary px-4xl py-5xl
        "
      >
        <InfoChip icon="i-custom:star" class="mb-xl text-text-primary">
          Удобные платежи — для ваших клиентов. Свобода роста — для вашего бизнеса
        </InfoChip>
        <h1 class="mb-sm text-h1">
          Прием платежей для <br>
          бизнеса любого масштаба
        </h1>
        <p class="mb-lg text-body-l">
          Полный спектр платежных решений для вашего бизнеса. <br>
          Комиссия от 1.5%, поддержка 24/7
        </p>
        <UButton class="mb-xl" @click="openContactModal">
          Оставить заявку на подключение
        </UButton>
        <ul
          class="
            mb-60 flex flex-col flex-wrap gap-4
            lg:flex-row
            xl:mb-0 xl:pr-105
          "
        >
          <li class="flex items-center gap-2">
            <UIcon
              name="i-custom:check-circle" class="
                size-5 shrink-0 text-emerald-600
              "
            />
            <span class="text-body-m">Быстрая интеграция</span>
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              name="i-custom:check-circle" class="
                size-5 shrink-0 text-emerald-600
              "
            />
            <span class="text-body-m">Без скрытых комиссий</span>
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              name="i-custom:check-circle" class="
                size-5 shrink-0 text-emerald-600
              "
            />
            <span class="text-body-m">Предоставляем API-документацию</span>
          </li>
        </ul>

        <span
          class="
            absolute -bottom-60 left-1/2 size-106.5 -translate-x-1/2
            rounded-full
            bg-[linear-gradient(145deg,#E9F5FF_26.08%,#45A6C3_69.04%)]
            xl:right-15 xl:-bottom-90 xl:left-auto xl:size-213.25
            xl:translate-x-1/2
          "
        />
        <NuxtImg
          src="/images/hero-img.png" class="
            absolute -bottom-20 left-1/2 h-85 w-78.5 -translate-x-1/2
            xl:-right-115 xl:left-auto xl:h-170.25 xl:w-157.25
          "
        />
      </div>
    </UContainer>
  </section>
</template>
