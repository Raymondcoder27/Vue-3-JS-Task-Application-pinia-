<template>
        <h3>Add New task</h3>
        <form class="form" @submit.prevent="handleSubmit">
        <input type="text"
        v-model="newTask">
        <button type="submit">Submit</button>
    </form>
</template>

<script setup>
    import {ref} from 'vue'
    import { useTaskStore } from '@/stores/taskStore';
    const taskStore = useTaskStore()

    const newTask = ref('')

    const handleSubmit = () => {
        if (newTask.value.length > 0) {
            taskStore.addTask({
        title: newTask.value,
        isFav: false,
        id: generatedId()
            })
            newTask.value = ''
        }
    }

    const  generatedId = () =>{
      return Math.floor(Math.random() * 1000)
    }
</script>

<style scoped>
 h3{
    text-align: left;
 }
</style>