<script setup>
import Input from '@/components/Input.vue'

</script>

<template>
  <div class="container">
    <div class="bg">
        <Input />
        <!-- <img src="../assets/bg-All.svg" alt="background"> -->
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center; 
  height: 100vh;
  .bg {
        width: 300px;
        height: 450px;
        background-color: #fff;
    }  
}



</style>
