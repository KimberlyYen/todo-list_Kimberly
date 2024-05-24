<script setup>
</script>

<template>
  <!-- <input class="input" type="text" id="myInput" placeholder="Title..."/> -->
  <div class="input">
    <input type="text" class="inputBox">
    <img src="@/assets/btn-add.svg" alt="btn-add">
  </div>
</template>

<style lang="scss" scoped>
.input {
  display: flex;
  position: absolute;
  width: 204px;
  height: 30px;
  position: relative;
  top: 130px;
  left: 50px;
  border: #F7C258 1px solid;

  .inputBox {
    border: none;
    width: 204px;
  }
}

img{
  position: relative;
  top: 0px;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 3px;
}
</style>
