<template>
  <div>
    <div class="big-container">
      <h3 style="font-weight: normal; display: flex">Персональные данные</h3>

      <PersonalInformation />

      <AddChildren />

      <!--      <AddTodo-->
      <!--        @add-todo="addTodo"-->
      <!--      />-->
    </div>

    <!--    <Loader v-if="loading"/>-->
    <!--    <TodoList-->
    <!--      v-else-if="filteredTodos.length"-->
    <!--      v-bind:todos="filteredTodos"-->
    <!--      @remove-todo="removeTodo"-->
    <!--    />-->
    <!--    <p v-else>No todos!</p>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PersonalInformation from '@/views/form/components/personal-information.vue'
import AddChildren from '@/views/form/components/add-children.vue'

export default defineComponent({
  name: 'HomePage',
  components: { PersonalInformation, AddChildren },
})
</script>

<style>
.big-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 375px;
}
</style>
