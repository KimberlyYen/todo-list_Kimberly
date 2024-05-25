<script setup>
import Input from "@/components/Input.vue";
// import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="container">
    <div class="bg">
      <div class="inner">
        <!-- <Header class="header" /> -->
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
  height: 100vh;

  .bg {
    display: flex;
    width: 300px;
    height: 450px;
    background-color: #c6e4e6;
  }

  .inner {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    width: 255px;
    height: 380px;
    background-color: white;

    .header {
      text-align: center;
      transform: translateY(-25%);
    }

    .footer {
      position: absolute;
      bottom: 0;
      left: 25px;
    }
  }
}
</style>
