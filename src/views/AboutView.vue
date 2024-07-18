<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="btn">
      <!-- <button class="btn" @click="storeCounter.increament">{{ storeCounter.count }}</button> -->
    </div>
  </div>
</template>

<script setup>
  import { useTaskStore } from '@/stores/taskStore';
   
  const storeTask = useTaskStore()
</script>

<style scoped>
  .about {
    text-align: center;
  }
    .btn{
    font-size: 30px;
    padding: 10px;
  }
  </style>
