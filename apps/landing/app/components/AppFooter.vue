<script setup lang="ts">
</script>

<template>
  <footer class="bg-surface-secondary py-3xl">
    <UContainer class="flex flex-col gap-2xl">
      <div
        class="
          grid grid-cols-1 gap-xl
          md:grid-cols-2
          lg:grid-cols-5
        "
      >
        <!-- Logo and Info Section -->
        <div
          class="
            flex flex-col gap-6
            lg:col-span-1
          "
        >
          <AppLogo />
          <p class="text-body-m text-text-secondary">
            Современная платежная система для бизнеса любого масштаба. Надежно, быстро и удобно
          </p>
          <div class="text-text-tertiary flex flex-col gap-1 text-body-s">
            <p>Лицензия НБКР №3070281125</p>
            <p>Лицензия НБКР №2068281125</p>
          </div>
        </div>

        <!-- Navigation Columns -->
        <div>
          <h4 class="mb-lg font-bold">
            О нас
          </h4>
          <ul class="flex flex-col gap-md">
            <li>
              <ULink
                to="#methods" class="
                  text-body-m text-text-secondary
                  hover:text-primary
                "
              >
                Как это работает
              </ULink>
            </li>
            <li>
              <ULink
                to="#features" class="
                  text-body-m text-text-secondary
                  hover:text-primary
                "
              >
                Возможности
              </ULink>
            </li>
            <li>
              <ULink
                to="#methods" class="
                  text-body-m text-text-secondary
                  hover:text-primary
                "
              >
                Методы оплаты
              </ULink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-lg font-bold">
            Клиентам
          </h4>
          <ul class="flex flex-col gap-md">
            <li>
              <ULink
                to="#connect" class="
                  text-body-m text-text-secondary
                  hover:text-primary
                "
              >
                Как подключиться
              </ULink>
            </li>
            <li>
              <ULink
                class="
                  text-body-m text-text-secondary
                  hover:text-primary
                "
              >
                FAQ
              </ULink>
            </li>
            <li>
              <ULink
                class="
                  cursor-pointer text-body-m text-text-secondary
                  hover:text-primary
                "
                @click="openContactModal"
              >
                Связаться
              </ULink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-lg font-bold">
            Разработчикам
          </h4>
          <ul class="flex flex-col gap-md">
            <li>
              <ULink
                class="
                  text-body-m text-text-secondary
                  hover:text-primary
                "
              >
                Документация API
              </ULink>
            </li>
            <li>
              <ULink
                class="
                  text-body-m text-text-secondary
                  hover:text-primary
                "
              >
                SDK и плагины
              </ULink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-lg font-bold">
            Связаться с нами
          </h4>
          <ul class="flex flex-col gap-md">
            <li class="flex items-center gap-xs">
              <UIcon name="i-heroicons-envelope" class="size-5 text-primary" />
              <a
                href="mailto:info@transferpay.kg" class="
                  text-body-m text-text-secondary
                  hover:text-primary
                "
              >info@transferpay.kg</a>
            </li>
            <li class="flex items-center gap-xs">
              <UIcon name="i-heroicons-phone" class="size-5 text-primary" />
              <a
                href="tel:+996999555557" class="
                  text-body-m text-text-secondary
                  hover:text-primary
                "
              >+996 999 555 557</a>
            </li>
            <li class="flex items-center gap-xs">
              <UIcon name="i-heroicons-map-pin" class="size-5 text-primary" />
              <span class="text-body-m text-text-secondary">Бишкек, ул. Пожарского 43</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex w-full flex-col">
        <USeparator class="mb-lg" />
        <div
          class="
            flex flex-col justify-between gap-md
            md:flex-row
          "
        >
          <p class="text-text-tertiary text-body-s">
            © TransferPay, 2026. Все права защищены.
          </p>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
