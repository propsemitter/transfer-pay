import { reactive } from 'vue'

export const contactModalState = reactive({
  isOpen: false,
})

export const openContactModal = () => {
  contactModalState.isOpen = true
}

export const closeContactModal = () => {
  contactModalState.isOpen = false
}
