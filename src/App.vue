<script setup lang="tsx">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { useGlobalProperties } from "lwx-test-ui";

const global = useGlobalProperties();

console.log(global);

const row = ref({
  render: () => {
    return <div>tsx渲染</div>;
  },
});

const scope = ref({fff: "fff"})

const value = ref("");
</script>

<template>
   <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <lwx-table-pro query-interface="" />
  <el-button type="primary">测试</el-button>
 <!-- <ElAlert :type="'primary'">fdsfds</ElAlert>
  <lwx-dic :code="'test'"/>
  <lwx-select-icon v-model="value" /> -->
  <lwx-table-pro />
  <lwx-input />
  <lwx-input />
  <lwx-big-dialog :title="'测试'" />
  <lwx-render-tsx :row="row" :scope="scope" />
  <lwx-input :placeholder="'请输入fff'" v-model="value" />
  <!-- <LwxButton /> -->
  <LwxInput />
  <!-- <lwx-input /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
