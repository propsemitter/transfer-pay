<script setup lang="ts">
</script>

<template>
  <section id="methods" class="relative overflow-hidden py-3xl">
    <!-- Background Glow -->
    <div
      class="pointer-events-none absolute -right-40 top-1/2 size-[600px] -translate-y-1/2 rounded-full bg-[#8CB6FF]/20 blur-[250px]"
    />

    <UContainer class="relative z-10 flex flex-col items-start">
      <div class="mb-2xl flex flex-col items-start gap-6">
        <InfoChip icon="i-custom:arrows-right-left">
          МЕТОДЫ ОПЛАТЫ
        </InfoChip>
        <div class="flex flex-col">
          <h2 class="mb-sm text-h1">
            Прием платежей для бизнеса любого масштаба
          </h2>
          <p class="mb-lg text-body-l">
            Полный спектр платежных решений для вашего бизнеса. Комиссия от 1.5%, поддержка 24/7
          </p>
        </div>
      </div>
      <div
        class="
          mb-2xl grid w-full grid-cols-1 gap-4
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        <InfoCard
          title="Банковские карты"
          description="Прием платежей с карт:"
          icon="i-custom:credit-card"
          image="/images/method-1.png"
          gradient="bg-[linear-gradient(145deg,#CEDFFF_26.08%,#4570C3_69.04%)]"
        >
          <template #details>
            <ul class="flex gap-sm">
              <li class="flex items-center gap-xs">
                <NuxtImg src="/images/visa-circle-img.png" class="size-8" />
                <span class="text-body-m">VISA</span>
              </li>
              <li class="flex items-center gap-xs">
                <NuxtImg src="/images/elcart-circle-img.png" class="size-8" />
                <span class="text-body-m">Элкарт</span>
              </li>
              <li class="flex items-center gap-xs">
                <NuxtImg src="/images/master-card-circle-img.png" class="size-8" />
                <span class="text-body-m">MasterCard</span>
              </li>
            </ul>
          </template>
        </InfoCard>
        <InfoCard
          title="Оплата по QR-коду"
          description="Оплата по QR-коду c банковских приложений и мобильных кошельков"
          icon="i-custom:qr-code"
          image="/images/method-2.png"
          gradient="bg-[linear-gradient(145deg,#D0CEFF_26.08%,#6245C3_69.04%)]"
        />
        <InfoCard
          title="Мобильные банкинги"
          description="Прием платежей через мобильные приложения банков"
          icon="i-custom:device-phone-mobile"
          image="/images/method-3.png"
          gradient="bg-[linear-gradient(145deg,#CEFFF4_26.08%,#2B8F78_69.04%)]"
        />
      </div>
      <UButton class="self-center" @click="openContactModal">
        Оставить заявку на подключение
      </UButton>
    </UContainer>
  </section>
</template>
