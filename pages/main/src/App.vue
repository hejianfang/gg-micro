<template>
  <div id="app">
    <!-- // 子应用渲染区 -->
    <div id="subapp-viewport" class="app-view-box"></div>
    <!-- 主应用渲染区，用于挂载主应用触发的路由 -->
    <!-- <div>主应用显示{{msg}}</div>
    <router-view v-show="$route.name" /> -->
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class App extends Vue {
  public msg = '主页1'
}
</script>
