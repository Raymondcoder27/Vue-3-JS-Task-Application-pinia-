<template>
  <main>
    <h3>Home</h3>
   <!-- <Counter /> -->
    <!-- <h4>The count is {{ storeCounter.oddOrEven }}</h4> -->
    <!-- <input type="number"  -->
    <!-- v-model="storeCounter.count"> -->
    <ul>
      <li 
      class="task-list"
      v-for="task in taskStore.tasks"
      :key="task.id"
      >
     <TaskDetails :task="task" />
      </li>
    </ul>
  </main>
</template>

<script setup>
  //  import Counter from '@/components/Counter.vue';
    import TaskDetails from '@/components/TaskDetails.vue';
import { useTaskStore } from '@/stores/taskStore';

    const taskStore = useTaskStore()
</script>

<style scoped>
  main{
    text-align: center;
  }
</style>

