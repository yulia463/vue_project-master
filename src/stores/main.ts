import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    person: {
      name: '',
      age: 0,
    },
    children: [],
  }),
  actions: {},
})
