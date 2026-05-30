<script setup lang="ts">
import { contactModalState, closeContactModal } from '../utils/contactModal'

// Lock body scroll when modal is open
watch(() => contactModalState.isOpen, (val) => {
  if (process.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})

// Close on escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeContactModal()
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-500 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-400 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="contactModalState.isOpen"
        class="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:p-6 lg:items-center"
      >
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
          @click="closeContactModal"
        />

        <!-- Modal Content Wrapper -->
        <div class="relative w-full max-w-[1280px] py-8 lg:py-0">
          <Transition
            appear
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 scale-95 translate-y-8"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 translate-y-8"
          >
            <!-- Exact copy of the provided card structure -->
            <div
              class="
                relative flex w-full flex-col items-start gap-md overflow-hidden
                rounded-radius-m bg-surface-secondary p-md
                lg:p-xl
              "
              @click.stop
            >
              <!-- Manual Close Button -->
              <UButton
                icon="i-heroicons-x-mark"
                color="neutral"
                variant="ghost"
                class="absolute right-2 top-2 z-50 lg:right-6 lg:top-6"
                size="xl"
                @click="closeContactModal"
              />

              <div class="relative z-10 flex flex-col items-start gap-6">
                <InfoChip icon="i-custom:arrows-right-left">
                  СВЯЗАТЬСЯ С НАМИ
                </InfoChip>
                <div class="flex flex-col">
                  <h2 class="mb-sm text-h1 leading-tight">
                    Переходите на новый<br> уровень приема платежей
                  </h2>
                  <p class="mb-lg text-body-l">
                    Оставьте заявку и мы свяжемся с вами
                  </p>
                </div>
              </div>

              <div
                class="
                  relative z-10 mb-70 w-full
                  lg:mb-0 lg:max-w-[400px]
                "
              >
                <ContactForm />
              </div>

              <!-- Decorative elements with EXACT classes from your reference -->
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
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
