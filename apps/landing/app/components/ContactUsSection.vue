<script setup lang="ts">
</script>

<template>
  <section id="contact" class="py-3xl">
    <UContainer class="flex flex-col items-center">
      <div
        class="
          relative flex w-full flex-col items-start gap-md overflow-hidden
          rounded-radius-m bg-surface-secondary p-md
        "
      >
        <div class="flex flex-col items-start gap-6">
          <InfoChip icon="i-custom:arrows-right-left">
            СВЯЗАТЬСЯ С НАМИ
          </InfoChip>
          <div class="flex flex-col">
            <h2 class="mb-sm text-h1">
              Переходите на новый<br> уровень приема платежей
            </h2>
            <p class="mb-lg text-body-l">
              Оставьте заявку и мы свяжемся с вами
            </p>
          </div>
        </div>

        <div
          class="
            mb-70 w-full
            lg:max-w-[400px]
          "
        >
          <ContactForm />
        </div>

        <span
          class="
            absolute -bottom-90 left-1/2 size-106.5 -translate-x-1/2
            rounded-full
            bg-[linear-gradient(145deg,#E9F5FF_26.08%,#45A6C3_69.04%)]
            lg:-right-300 lg:left-auto lg:size-[1184px]
          "
        />
        <img
          src="/images/method-1.png" class="
            absolute -bottom-20 left-1/2 h-85 w-78.5 -translate-x-1/2
            lg:-right-90 lg:left-auto lg:h-[700px] lg:w-[624px]
          "
        />
      </div>
    </UContainer>
  </section>
</template>
