const Koa = require('koa'),
  Router = require('koa-router');

const app = new Koa(),
  router = new Router;


router.get('/api/1',(ctx, next) => {
  ctx.body = 'hello'
})

// 开始服务并生成路由
app.use(router.routes())
  .use(router.allowedMethods());

app.listen(4000);
console.log('app running on port 4000');