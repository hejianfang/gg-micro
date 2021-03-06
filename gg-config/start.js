const { sub_apps } = require("./index");
const path = require("path");
const util = require("util");

const exec = util.promisify(require("child_process").exec);
function start() {
  console.log(`即将进入所有模块并启动服务：${JSON.stringify(sub_apps)} ing...`);
  sub_apps.forEach(async (i) => {
    i = "pages/" + i;
    console.log(
      `${i} 开始启动... 全部启动需要时间，请稍加等候，或刷新浏览器即可`
    );
    const { error, stdout, stderr } = await exec("npm run serve", {
      cwd: path.resolve(i)
    });
    console.log(i, "success", stdout);
    console.error(i, "error", stderr);
  });
  // exec("start http://localhost:8080");
}
start();

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
  // application specific logging, throwing an error, or other logic here
});
