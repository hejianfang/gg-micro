const { sub_apps } = require("./index");
const path = require("path");
const util = require("util");
console.log(
  `即将进入所有模块并下载依赖：${JSON.stringify(
    sub_apps
  )} ing... 批量下载所有项目依赖推荐使用 npm run cinit`
);
const exec = util.promisify(require("child_process").exec);
let registry = process.argv.length === 3 ? "cnpm install" : "npm install";
function install() {
  sub_apps.forEach(async (i) => {
    i = 'pages/' + i
    console.log(`${i} 开始下载，耗时较久请耐心等待...`);
    const { stdout, stderr } = await exec(registry, { cwd: path.resolve(i) });
    console.log(i, "success", stdout);
    console.error(i, "error", stderr);
  });
}
install();
process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
});
