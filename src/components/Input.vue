<script setup>
import { ref, watch } from "vue";

// 定義一個用於存儲新待辦事項輸入的變數
const addNewOne = ref("");

// 定義一個用於存儲所有待辦事項的列表
const toDoList = ref([]);

// 增加新的待辦事項
function add() {
  if (addNewOne.value.trim() !== "") {
    toDoList.value.push({ text: addNewOne.value, editable: false });
    addNewOne.value = "";
    console.log(toDoList);
  }
}

// 刪除指定索引的待辦事項
function deleteToDoList(index) {
  toDoList.value.splice(index, 1);
}

// 切換指定索引的待辦事項的編輯模式
function toggleEdit(index) {
  toDoList.value[index].editable = !toDoList.value[index].editable;
}

// 保存編輯後的待辦事項
function saveEdit(index, newText) {
  if (newText.trim() !== "") {
    toDoList.value[index].text = newText;
    toDoList.value[index].editable = false;
  }
}

// 監聽 toDoList 的變化並在控制台輸出
watch(toDoList, (toDoList) => {
  console.log('toDoList changed:', toDoList);
});
</script>



<template>
  <!-- header -->
  <div class="title">
    <div class="howMany">{{ toDoList.length }}</div>
    <img src="../assets/title.svg" alt="title" />
  </div>

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
      @click="add()"
    />
  </div>

  <!-- 使用 v-for 渲染  -->
  <div v-if="toDoList.length !== 0" class="lists">
    <div class="outPut" v-for="(todo, index) in toDoList" :key="index">
      <template v-if="todo.editable">
        <input v-model="todo.text" @keyup.enter="saveEdit(index, todo.text)" />
        <div @click="saveEdit(index, todo.text)">
          <img src="@/assets/btn-editDone.svg" alt="btn-editDone" class="btn-editDone">
        </div>
      </template>
      <template v-else>
        {{ todo.text }}
        <div class="btns">
          <img src="@/assets/btn-edit.svg" alt="btn-edit" class="btn-edit" @click="toggleEdit(index)" />
          <img src="@/assets/btn-delete.svg" alt="btn-delete" class="btn-delete" @click="deleteToDoList(index)" />
        </div>
      </template>
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
  width: 15rem;
  height: 2rem;
  border: #f7c258 1px solid;
  font-size: 14px;
  font-weight: normal;
  padding-left: 2px;

  .inputBox {
    border: none;
    width: 15rem;
  }

  .btn-add,
  .btns {
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
    margin-right: 3px;
  }

  .btn-edit {
    margin-right: 3px;
  }
}

.lists {
  max-height: 20rem;
  overflow-y: scroll;
}
.outPut {
  border: #acdbde 1px solid;
  margin-top: 1rem;
  background-color: #c6e4e6;
}

.title {
  margin-bottom: 2rem;
  img {
    position: absolute;
    margin-left: 4rem;
    margin-top: -2.5rem;
  }

  .howMany {
    position: relative;
    color: orangered;
    z-index: 5;
    left: 14.8rem;
    bottom: 4px;
  }
}

input {
  width: 18rem;
}
</style>
