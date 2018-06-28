const Koa = require('koa');
const app = new Koa();
const router = require('koa-simple-router');
const convert = require('koa-convert');
const path = require('path');
const render = require('koa-swig');
const server = require('koa-static');
const co = require('co');
const config = require('./config/config.js');
const initRouter = require('./controller/initRouter.js');


app.context.render = co.wrap(render({
    root: path.join(__dirname, './views'),
    autoescape: true,
    cache: 'memory', //disable, set to false
    ext: 'html',
    writeBody: false
}));

app.use(server(path.join(__dirname, './public')));

initRouter.init(app, router);
// app.use(router(_=>{
//     _.get('/',(ctx,next)=>{
//         ctx.body = 'hello world'
//     });
//     _.get('/index',async(ctx,next)=>{
//         ctx.body = await ctx.render('index.html');
//     });
// }));


app.listen(config.port, ()=>{
    console.log('server started')
});