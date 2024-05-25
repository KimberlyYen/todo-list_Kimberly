<script setup>
import { ref, watch } from "vue";

const addNewOne = ref("");
const toDoList = ref(["預設"]);
const howMany = ref(toDoList.value.length)

function add() {
  // 輸入內容
  // 按下enter
  // 顯示內容在第二欄
  if (addNewOne.value.trim() !== "") {
    toDoList.value.push(addNewOne.value); // 注意.value的寫法
    // console.log(toDoList.value.length);
    // toDoList.value.length = howMany
    addNewOne.value = ""; // 清空输入框 ?
    howMany.value = toDoList.value.length //更新任務數
  }

}

// 刪除索引位置資料, 一筆
function deleteToDoList(index) {
  toDoList.value.splice(index, 1);
  howMany.value = toDoList.value.length //更新任務數
}

// 監聽比數變化 
watch(toDoList, (newList) => {
  howMany.value = newList.length;
});


</script>

<template>
  <!-- header -->
  <div class="title">
    <div class="howMany">{{ howMany }}</div>
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

  <div v-if="toDoList.length !== 0" class="lists">
    <div class="outPut" v-for="(todo, index) in toDoList" :key="todo">
      {{ todo }}
      <img
        src="@/assets/btn-delete.svg"
        alt="btn-delete"
        class="btn-delete"
        @click="deleteToDoList(index)"
      />
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
  font-size: 14px;
  font-weight: normal;
  padding-left: 2px;

  .inputBox {
    border: none;
    width: 204px;
  }
}

.lists {
  max-height: 235px;
  overflow-y:scroll;
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

.title {  
  margin-bottom: 2rem;
  img {
    position: absolute;
    margin-left: 1rem;
    margin-top: -2.5rem;
  }

  .howMany {
    position: relative;
    color: orangered;
    z-index: 5;
    left: 11.7rem;
    bottom: 4px;
  }
}
</style>
