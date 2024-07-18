<template>
    <div class="task">
        {{ task.title }}
    </div>
</template>

<script setup>
    import { useTaskStore } from '@/stores/taskStore';
    const taskStore = useTaskStore

    const props = defineProps(['task'])
</script>