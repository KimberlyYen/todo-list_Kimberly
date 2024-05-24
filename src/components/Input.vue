<script setup>
import { ref } from 'vue';

const addNewOne = ref('');

function add() {
  console.log(addNewOne.value);
}
</script>

<template>
  <div class="input">
    <input
      type="text"
      class="inputBox"
      v-model="addNewOne"
      @keyup.enter="add"
    />
    <img src="@/assets/btn-add.svg" alt="btn-add" >
  </div>
  
  <div class="outPut">
    {{ addNewOne }}
  </div>
</template>

<style lang="scss" scoped>
.input ,
.outPut{
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

.outPut {
  border: red 1px solid;
  margin-top: 10px;
}

img{
  position: relative;
  top: 0px;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 3px;
  cursor: pointer;
}
</style>
