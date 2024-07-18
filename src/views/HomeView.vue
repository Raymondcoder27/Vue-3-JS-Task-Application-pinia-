<template>
  <main>
    <h3>Home</h3>
   <!-- <Counter /> -->
    <!-- <h4>The count is {{ storeCounter.oddOrEven }}</h4> -->
    <!-- <input type="number"  -->
    <!-- v-model="storeCounter.count"> -->

    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Fav Tasks</button>
    </nav>
    
    <ul>
     <div class="task-list" v-if="filter === 'all'">
      <p>all tasks</p>
      <li 
      class="task-list"
      v-for="task in taskStore.tasks"
      :key="task.id"
      >
     <TaskDetails :task="task" />
      </li>
     </div>
     <div class="task-list" v-if="filter === 'favs'">
      <p>fav tasks</p>
      <li 
      class="task-list"
      v-for="task in taskStore.favs"
      :key="task.id"
      >
     <TaskDetails :task="task" />
      </li>
     </div>
    </ul>
  </main>
</template>

<script setup>
  //  import Counter from '@/components/Counter.vue';
    import TaskDetails from '@/components/TaskDetails.vue';
import { useTaskStore } from '@/stores/taskStore';
import {ref} from 'vue'

    const taskStore = useTaskStore()
    const filter = ref('all')
</script>

<style scoped>
  main{
    text-align: center;
  }
</style>

