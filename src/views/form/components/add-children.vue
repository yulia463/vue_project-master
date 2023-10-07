<template>
  <form @submit.prevent="onSubmit">
    <div class="information">
      <div class="btn">
        <p class="children-and-btn">Дети (Макс. 5)</p>
        <button v-if="children.length < 5" class="custom-button" type="button" @click="addNewChild">
          Добавить ребенка
        </button>
      </div>
      <div class="bottom-container">
        <div v-for="(child, index) in children" :key="index" class="inputs-and-btn">
          <div class="input-container-small">
            <label class="input-label">Имя</label>
            <input
              v-model="child.name"
              type="text"
              class="custom-input"
              placeholder="Введите имя"
            />
          </div>
          <div class="input-container-small">
            <label class="input-label">Возраст</label>
            <input
              v-model.number="child.age"
              type="number"
              class="custom-input"
              placeholder="Введите возраст"
            />
          </div>
          <div>
            <button class="custom-button-delete" type="button" @click="removeChild(index)">
              Удалить
            </button>
          </div>
        </div>
        <div class="btn-save">
          <button class="custom-button-save" type="submit">Сохранить</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { defineComponent } from 'vue'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  name: 'ChildForm',
  data() {
    const mainStore = useMainStore()
    const initialChildren = mainStore.children.length
      ? mainStore.children
      : [
          {
            age: '',
            name: '',
          },
        ]
    return {
      children: initialChildren,
    }
  },
  methods: {
    onSubmit() {
      const mainStore = useMainStore()
      mainStore.children = this.children
      // this.children.forEach((child) => {
      //   if (child.name && child.age) {
      //     mainStore.children.push({ ...child })
      //   }
      // })
    },
    addNewChild() {
      if (this.children.length < 5) {
        this.children.push({ name: '', age: '' })
      }
    },
    removeChild(index) {
      this.children.splice(index, 1)
    },
  },
})
</script>

<style scoped>
form {
  display: flex;
}

.input-container-small {
  width: 260px;
  height: 56px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin: 0 10px 0 0;
}

.input-label {
  align-self: flex-start;
  color: #888;
  font-weight: normal;
}

.custom-input {
  border: none;
  outline: none;
  height: 100%;
  font-size: 16px;
}

.custom-input::placeholder {
  color: #bbb;
}

.information {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.btn {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 635px;
}

.children-and-btn {
  display: flex;
}
.custom-button {
  width: 204px;
  height: 44px;
  background-color: transparent;
  border: 2px solid #01a7fd;
  border-radius: 24px;
  color: #01a7fd;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-button-delete {
  height: 44px;
  background-color: transparent;
  border: white;
  color: #01a7fd;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;
}
.custom-button-save {
  width: 118px;
  height: 44px;
  border: 2px solid #01a7fd;
  border-radius: 24px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;
  background-color: #01a7fd;
}
.btn-save {
  display: flex;
}
.custom-button::before {
  content: '+ ';
  font-size: 20px;
  margin-right: 4px;
}

.bottom-container {
  display: flex;
  gap: 20px;
  padding-top: 25px;
  flex-direction: column;
}
.inputs-and-btn {
  display: flex;
}
</style>
