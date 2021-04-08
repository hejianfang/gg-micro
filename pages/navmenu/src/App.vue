<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';
import GuozhiBody from './components/GuozhiBody.vue';
@Component({
  components: {
    GuozhiBody
  }
})
export default class App extends Vue {
  protected render() {
    return (
      <div>
        <GuozhiBody />
      </div>
    )
  }
}
</script>
