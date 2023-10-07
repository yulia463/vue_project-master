<template>
  <div class="container">
    <div class="input-container">
      <label for="name" class="input-label">Имя</label>
      <input
        id="name"
        v-model="person.name"
        type="text"
        class="custom-input"
        placeholder="Введите имя"
      />
    </div>
    <div class="input-container">
      <label for="age" class="input-label">Возраст</label>
      <input
        id="age"
        v-model.number="person.age"
        type="number"
        class="custom-input"
        placeholder="Введите возраст"
      />
    </div>
  </div>
</template>

<script>
import { useMainStore } from '@/stores/main'

export default {
  computed: {
    person: {
      get() {
        return useMainStore().person
      },
      set(value) {
        useMainStore().person = value
      },
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.input-container {
  width: 616px;
  height: 56px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 10px;
}

.input-label {
  color: #888;
  align-self: flex-start;
  font-weight: normal;
}

.custom-input {
  border: none;
  outline: none;
  height: 100%;
  font-size: 16px;
}
</style>
