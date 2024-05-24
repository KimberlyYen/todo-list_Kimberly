<script setup>
import { ref } from "vue";

const addNewOne = ref("");
const toDoList = ref(['預設']);

function add() {
  // 輸入內容
  // 按下enter
  // 顯示內容在第二欄
  toDoList.value.push(addNewOne.value); // 注意.value的寫法


  // 不可輸入空值
  if (addNewOne.trim() === "") {
    // 如果为空，显示警告对话框
    alert("請輸入內容");
    return false; // 阻止表单提交
  }
}

// 刪除索引位置資料, 一筆
function deleteToDoList(index) {
  toDoList.value.splice(index, 1)
}


</script>

<template>
  <div class="input">
    <input
      type="text"
      class="inputBox"
      v-model="addNewOne"
      @keyup.enter="add()"
      placeholder="預計完成的事項..."
    />
    <img
      src="@/assets/btn-add.svg"
      alt="btn-add"
      class="btn-add"
      disabled="addNewOne === '' ? true:false"
    />
  </div>

  <div v-if="toDoList.length !== 0">
    <div class="outPut" v-for="(todo, index) in toDoList" :key="todo">
        {{ todo }}
      <img src="@/assets/btn-delete.svg" alt="btn-delete" class="btn-delete" @click="deleteToDoList(index)"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input,
.outPut {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  width: 204px;
  height: 30px;
  border: #f7c258 1px solid;
  font-size: 16px;
  padding-left: 2px;

  .inputBox {
    border: none;
    width: 204px;
  }
}

.outPut {
  border: #acdbde 1px solid;
  margin-top: 1rem;
  background-color: #c6e4e6;
}

.btn-add,
.btn-delete {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 3px;
  cursor: pointer;
}
</style>
