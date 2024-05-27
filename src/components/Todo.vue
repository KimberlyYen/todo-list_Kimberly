<script setup>
import Input from "@/components/Input.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="container">
    <div class="bg">
      <div class="inner">
        <Input />
        <Footer class="footer" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; // Changed from 100vw to 100%(防止左右滾動)
  height: 100%; // Ensure it covers the full viewport height(防止上下滾動)
  overflow: hidden; // Added to prevent scrolling

  .bg {
    display: flex;
    align-items: center; // Center vertically
    justify-content: center; // Center horizontally
    width: 25rem;
    height: 36rem;
    background-color: #c6e4e6;
  }

  .inner {
    position: relative;
    width: 20rem;
    height: 30rem;
    background-color: white;

    .header {
      text-align: center;
      transform: translateY(-25%);
    }

    .footer {
      position: absolute;
      bottom: -0.7rem;
      left: 5rem;
    }
  }
}
</style>
