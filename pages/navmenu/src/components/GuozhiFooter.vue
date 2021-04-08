<template>
  <div class="guozhi-footer">
    <div class="g-f-left">
      <p>
        <img src="@/assets/imgs/guozhi-logo.png" alt="" />
        <span>全场景教师工作发展平台</span>
      </p>
      <p>© 2020 北京果果乐学科技有限公司 - 版权所有</p>
    </div>
    <div class="g-f-right">
      <img src="@/assets/imgs/guozhi-qrcode.png" alt="" />
      <p>扫码关注</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class GuozhiFooter extends Vue {
}
</script>

<style lang="scss">
.guozhi-footer {
  text-align: center;
  .g-f-left {
    display: inline-block;
    vertical-align: middle;
    width: 250px;
    p {
      font-size: 12px;
      text-align: left;
      line-height: 2;
      img {
        float: left;
        height: 24px;
        position: relative;
        bottom: 4px;
        margin-right: 5px;
      }
    }
    p + p {
      border-top: $border-d;
    }
  }
  .g-f-right {
    display: inline-block;
    vertical-align: middle;
    margin-left: 80px;
    img {
      width: 64px;
      height: 64px;
    }
    p {
      text-align: center;
      font-size: 12px;
    }
  }
}
</style>
