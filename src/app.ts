import Koa from 'koa';
import config from './config';

const app = new Koa();

console.log(config.port);

app.use(async (ctx, next) => {
  ctx.body = 'hello world!';
});

export default app;
