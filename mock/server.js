const Koa = require('koa'),
  Router = require('koa-router');

const app = new Koa(),
  router = new Router;

const homeAdData = require('./home/ad')
router.get('/api/homead',(ctx, next) => {
  ctx.body = homeAdData
})

const homeListData = require('./home/list')
router.get('/api/homelist/:city/:page', (ctx) => {
  const city = ctx.params.city
  const page = ctx.params.page
  console.log('当前城市：'+ city)
  console.log('当前页数：'+ page)
  ctx.body = homeListData
})
// 开始服务并生成路由
app.use(router.routes())
  .use(router.allowedMethods());

app.listen(4000);
console.log('app running on port 4000');