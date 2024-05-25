<script setup>
import { ref, watch } from "vue";

const addNewOne = ref("");
const toDoList = ref([]);
const myList = ref([]);

// 从 localStorage 中获取 myList 值并解析为数组
myList.value = JSON.parse(localStorage.getItem("myList")) || [];
const howMany = ref(myList.value.length);

function add() {
  // 不為空
  if (addNewOne.value.trim() !== "") {
    toDoList.value.push(addNewOne.value);
    localStorage.setItem("myList", JSON.stringify(toDoList.value));
    addNewOne.value = "";
    howMany.value = toDoList.value.length;

    // 更新 myList 的值
    myList.value = toDoList.value;
  }
}

function deleteToDoList(index) {
  toDoList.value.splice(index, 1);

  localStorage.setItem("myList", JSON.stringify(toDoList.value));
  howMany.value = toDoList.value.length;

  // 更新 myList 的值
  myList.value = toDoList.value;
}

//
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

  <!-- 使用 v-for 渲染 myList -->
  <div v-if="myList.length !== 0" class="lists">
    <div class="outPut" v-for="(todo, index) in myList" :key="index">
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
  width: 15rem;
  height: 2rem;
  border: #f7c258 1px solid;
  font-size: 14px;
  font-weight: normal;
  padding-left: 2px;

  .inputBox {
    border: none;
    width: 12.75rem;
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
    margin-left: 4.5rem;
    margin-top: -2.5rem;
  }

  .howMany {
    position: relative;
    color: orangered;
    z-index: 5;
    left: 15.4rem;
    bottom: 4px;
  }
}
</style>
