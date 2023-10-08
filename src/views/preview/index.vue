<template>
  <div class="preview-container">
    <div style="display: flex; flex-direction: column">
      <h3 style="font-weight: normal">Персональные данные</h3>
      <p class="person-info">
        {{ `${person.name}, ${formatAge(person.age)}` }}
      </p>
      <p style="display: flex">Дети</p>

      <div class="children-container">
        <div
          v-for="child in children"
          :key="child.name"
          style="font-weight: bold"
          class="child-info"
        >
          {{ `${child.name}, ${formatAge(child.age)}` }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useMainStore } from '@/stores/main'
import { formatAge } from '../../utils/formatAge'

export default defineComponent({
  name: 'PreviewPage',
  computed: {
    person() {
      return useMainStore().person
    },
    children() {
      return useMainStore().children
    },
  },
  methods: { formatAge },
})
</script>

<style>
.preview-container {
  display: flex;
  margin: 30px 375px;
  align-items: flex-start;
  padding-bottom: 76px;
}

.person-info {
  align-self: flex-start;
  font-weight: bold;
  margin-bottom: 60px;
}

.children-container {
  display: flex;
  flex-direction: column;
  align-items: self-start;
}

.child-info {
  background-color: #f1f1f1;
  margin: 8px 0;
  padding: 5px 15px;
  border-radius: 5px;
  height: 44px;
  display: flex;
  align-items: center;
}
</style>
