<template>
  <div>
    <GuozhiHeader />
    <GuozhiNavMenu :menus="menus" />
    <GuozhiFooter />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GuozhiFooter from './GuozhiFooter.vue';
import GuozhiNavMenu from './GuozhiNavMenu.vue';
import GuozhiHeader from './GuozhiHeader.vue';

interface menusItem {
  name: string
  subname: string
  icon: string
  path: string
}
@Component({
  components: { GuozhiFooter, GuozhiNavMenu, GuozhiHeader }
})

export default class GuozhiBody extends Vue {
  public menus:menusItem[] = [
    {
      name: '主页',
      subname: '主页',
      icon: 'icon-sys-home',
      path: '/workboard'
    }
  ]
}
</script>
