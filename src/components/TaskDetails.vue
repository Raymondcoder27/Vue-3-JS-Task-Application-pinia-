<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons">delete</i>
            <i class="material-icons">favorite</i>
        </div>
    </div>
</template>

<script setup>
    import { useTaskStore } from '@/stores/taskStore';
    // const taskStore = useTaskStore

    const props = defineProps(['task'])
</script>