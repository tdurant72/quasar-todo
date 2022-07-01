import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customerStore', {
  state: () => ({
    selectedCustomer:[]
  }),

  getters: {
    getSelectedCustomer(state){
      return state.selectedCustomer
    }
  },

  actions: {
    updateSelectedCustomer(payload){
      this.selectedCustomer = payload
    }
  }
})
