<script lang="tsx">
import { Vue, Prop,  Component} from 'vue-property-decorator'
@Component
export default class GuozhiNavMenu extends Vue {
  @Prop() private menus: object[]
  private isCollapse = true
  private activeRoute = ''
  private handleSelect() {}
  private changeCollapse() {}
  protected render() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const vm = this
    function createMenuDom(menus) {
      let menuDom = menus.map((m) => {
        if (m.children) {
          return (
            <el-submenu popper-class="app-menu-tree-popper" index={m.name}>
              <template slot="title">
                <i class={'gg-icon ' + (m.icon || 'icon-sys-default')}></i>{' '}
                <span>{vm.isCollapse ? m.subname || m.name : m.name}</span>
              </template>
              {createMenuDom(m.children)}
            </el-submenu>
          )
        } else {
          return (
            <el-menu-item index={m.path}>
              <i class={'gg-icon ' + (m.icon || 'icon-sys-default')}></i>{' '}
              <span>{vm.isCollapse ? m.subname || m.name : m.name}</span>
            </el-menu-item>
          )
        }
      })
      return menuDom
    }
    // 如果在meta 中配置了 则不显示侧边栏
    // if (this.$route.meta.leftShow) {
    //   return <div></div>
    // }
    return (
      <el-scrollbar class={'guozhi-nav-menu ' + (this.isCollapse ? 'is-collapse' : '')}>
        <el-menu
          class="app-menu-tree"
          text-color="#fff"
          active-text-color="#fff"
          background-color="#6e7dc3"
          unique-opened={true}
          default-active={this.activeRoute}
          collapse={this.isCollapse}
          on-select={this.handleSelect}>
          {createMenuDom(this.menus)}
        </el-menu>
        <button class={'menu-btn ' + (this.isCollapse ? 'is-collapse-menu-tab' : '')} on-click={this.changeCollapse}>
          <i class="gg-icon icon-sys-fold"></i>
        </button>
      </el-scrollbar>
    )
  }
}
</script>
<style lang="scss">
.guozhi-nav-menu {
  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  margin-top: 60px;
  transition: width 0.3s;
  background-color: $color-t;
  height: calc('100vh - 60px');
  padding-bottom: 60px;
  width: 256px;
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .is-collapse-menu-tab {
    transform: rotate(180deg);
  }
  .menu-btn {
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 20px;
    color: #fff;
  }
  .app-menu-tree {
    height: 100%;
    border: none;
    width: 256px;
    &.el-menu--collapse {
      width: 70px;
    }
    .el-menu-item i,
    .el-submenu i {
      color: #fff;
    }
    .gg-icon {
      margin: 0 5px;
    }
    .el-menu-item,
    .el-submenu__title {
      opacity: 0.8;
      &:hover {
        background-color: #5968bf !important;
        opacity: 1;
      }
    }
    .el-menu-item.is-active {
      background-color: #5968bf !important;
      opacity: 1;
    }
    .el-submenu.is-active .el-submenu__title {
      opacity: 1;
    }
  }
  &.is-collapse {
    //处理收起状态显示文字
    width: 70px;
    .app-menu-tree {
      > li + li {
        margin-top: 16px;
      }
      > .el-submenu > .el-submenu__title,
      > .el-menu-item {
        // icon:16px  文本:12px
        padding: 9px 0 !important;
        text-align: center;
        line-height: 1;
        span {
          margin-top: 10px;
          display: block;
          height: auto;
          width: auto;
          visibility: visible;
          font-size: 12px;
        }
      }
    }
  }
}
// 挂载在body上 收起状态 弹出设置样式
.app-menu-tree-popper {
  .el-menu-item i,
  .el-submenu i {
    color: #fff;
  }
  .gg-icon {
    margin: 0 5px;
  }
  .el-menu-item,
  .el-submenu__title {
    opacity: 0.8;
    &:hover {
      background-color: #5968bf !important;
      opacity: 1;
    }
  }
  .el-menu-item.is-active {
    background-color: #5968bf !important;
    opacity: 1;
  }
  .el-submenu.is-active .el-submenu__title {
    opacity: 1;
  }
}
</style>
