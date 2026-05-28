<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as v from 'valibot'

const schema = v.object({
  company: v.pipe(v.string(), v.minLength(1, 'Введите название компании')),
  category: v.pipe(v.string(), v.minLength(1, 'Введите категорию компании')),
  phone: v.pipe(
    v.string(),
    v.minLength(1, 'Введите номер телефона'),
    v.regex(/^[\d+\-() ]+$/, 'Некорректный формат номера'),
  ),
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  company: '',
  category: '',
  phone: '',
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log('Form submitted:', event.data)
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="relative z-10 w-full space-y-4"
    @submit="onSubmit"
  >
    <UFormField label="Название компании" name="company" class="w-full">
      <UInput v-model="state.company" class="w-full" size="xl" placeholder="Введите название" />
    </UFormField>

    <UFormField label="Категория компании" name="category" class="w-full">
      <USelect
        v-model="state.category" :items="['Компания 1', 'Компания 1']" class="
          w-full
        " size="xl" placeholder="Выберите категорию"
      />
    </UFormField>

    <UFormField label="Номер телефона" name="phone" class="w-full">
      <UInput v-model="state.phone" class="w-full" size="xl" placeholder="+996 __ __ __" />
    </UFormField>

    <div class="pt-2">
      <UButton type="submit" size="xl" block>
        Оставить заявку на подключение
      </UButton>
    </div>
  </UForm>
</template>
