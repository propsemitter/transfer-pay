<script setup lang="ts">
</script>

<template>
  <section id="licenses" class="relative overflow-hidden py-3xl">
    <!-- Background Glow -->
    <div
      class="pointer-events-none absolute -right-40 top-1/2 size-[600px] -translate-y-1/2 rounded-full bg-[#95FFFD]/20 blur-[250px]"
    />

    <UContainer class="relative z-10 flex flex-col items-center">
      <div class="mb-2xl flex w-full flex-col items-start gap-12 lg:flex-row lg:items-center">
        <div class="flex flex-col items-start gap-6 lg:w-1/2">
          <InfoChip icon="i-custom:arrows-right-left">
            ЛИЦЕНЗИИ
          </InfoChip>
          <div class="flex flex-col">
            <h2 class="mb-sm text-h1">
              TranferPay лицензирован
            </h2>
            <p class="mb-lg text-body-l">
              Мы работаем по официальным лицензиям Национального банка КР
            </p>
          </div>
        </div>
        <div class="grid w-full grid-cols-1 gap-4 lg:w-1/2">
          <LicenseCard
            image="/images/license-1.png"
            title="Лицензия НБКР на осуществление деятельности в качестве платежной организации"
            :description="['От 28 ноября 2025 года',
                           'Дает нам право принимать оплату от физических лиц в пользу вашего бизнеса']"
          />
          <LicenseCard
            image="/images/license-2.png"
            title="Лицензия НБКР на осуществление деятельности в качестве оператора платежной системы"
            :description="['От 28 ноября 2025 года',
                           'Позволяет напрямую обрабатывать и защищать транзакции через наш собственный процессинг']"
          />
        </div>
      </div>
      <UButton class="self-center" @click="openContactModal">
        Оставить заявку на подключение
      </UButton>
    </UContainer>
  </section>
</template>
