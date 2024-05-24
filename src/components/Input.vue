<script setup>
import { ref } from "vue";

const addNewOne = ref("");
const toDoList = ref([1,2,3]);

// 輸入內容
// 按下enter
// 顯示內容在第二欄
function add() {
  // alert(addNewOne.value);
  toDoList.value.push(addNewOne.value) // 注意.value的寫法
  alert(addNewOne);
}

// function delete() {
//   toDoList.value = []
// }
</script>

<template>
  <div class="input">
    <input
      type="text"
      class="inputBox"
      v-model="addNewOne"
      @keyup.enter="add()"
    />
    <img src="@/assets/btn-add.svg" alt="btn-add" class="btn-add"/>
  </div>

  <div v-if="toDoList.length !== 0">
    <div class="outPut" v-for="todo in toDoList" :key="todo">
      {{ todo }}
      <img src="@/assets/btn-delete.svg" alt="btn-delete" class="btn-delete" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input,
.outPut {
  display: flex;
  position: absolute;
  width: 204px;
  height: 30px;
  position: relative;
  top: 130px;
  left: 50px;
  border: #f7c258 1px solid;

  .inputBox {
    border: none;
    width: 204px;
  }
}

.outPut {
  border: red 1px solid;
  margin-top: 10px;
}

.btn-add, .btn-delete {
  position: relative;
  top: 0px;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 3px;
  cursor: pointer;
}
</style>
