const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());
app.use(async (ctx, next) => {
  try {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');

    if (ctx.request.method == 'OPTIONS') {
      ctx.response.status = 204;
    } else {
      await next();
    }
  } catch (err) {
    errorHandler(ctx, err);
  }
});

app.listen(3001);