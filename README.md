# e-commerce-system

> A Vue.js project

Vue2 started using **visual dom**

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Building Notes

### webpack 

1. 重点关注build/webpack.baseconfig.js and  config/index.js

2. build.js 最终开发完以后如何构建生产包

3. chalk.js 设置console控制台文案的颜色

4. semver.js 校验版本

5. var config = require('../config')// is equal to require('../config/index.js')

6. dev-tool 指定source-map是什么样的格式

7. uglifyjs 压缩文件

8. extractText 抽取文本

9. htmlwebpack 打包html的插件

10. spinner 输出日志

11. rm(path.join(...)) 打包之前把前一次的全删除掉

12. dev-client 热更新 热重载插件

13. opn 打开文件的插件

14. resolve in webpack.base.conf.js 指定不需要加后缀名直接可以引用的和别名

15.  vue-loader  babel-loader 

16. url-loader 图片进行base64编码 前端变成url data

17. main.js 项目的入口


### basical syntax

1. 模板语法：   {{msg}}  v-html=""  v-bind:id=""   {{ok?'Yes':'No'}}  v-text  v-if="" v-else v-else-if v-show v-cloak  {{msg|filter}} // v-if vs v-hide display:none, visible:hiddern

2. class and style:   v-bind:class="{active:isActive,'text-danger':hasError}" //  [activeClass,errorClass]

3. components communication:  parent <-----> child   emit event vs pass props

4. two-way binding: use propertyObject{get:function(){.do something..}, set:function(){..change dom.}}, when the value changed, trigger the function automatically.


### vue-router

1. <router-link to="/goods/title"></router-link>

2. <router-link v-bind:to="{name:'cart',params:{cartId:123}}"></router-link>//带参数的路由

2. new Router({
    routes:[
        {
            path: '/',
            name: 'GoodsList',
            components:{
                default: component1,
                title: component2
            }
        },
        {
            path: '/cart/:cartid',
            name: 'cart',
            component: Cart
        }
    ]
})


### vue-resource and Axios


1. this.$http.get('package1.json',{
    params:{
        userId：110
    }，
    headers:{
        token:001
    },
    before:{

    }
}).then(res =>{

},err =>{

})

this.$http.jsonP("url").then(res =>{},err =>{});

2.  golobal intercepter

Vue.http.interceptor.push(function(request,next){
    console.log("request init");
    next(function(response){
        //response init
        return response;
    })
})

3. http in vue as the same level with data

http:{
    root:{url}
}

4. axios // recommended by liu yuxi who is the author of nodejs

different: 失败err用  .catch(function(error){})

mounted: function(){
    axios.interceptors.request.use(function(config){
        console.log('request init');

        return config;
    })

    axios.interceptors.response.use(function(response){
        console.log('response init');
        
        return response;
    })
}


###ES6

let and const will not applied on hoisting

//模板语言
var str = 'console.log("a" + a);
            console.log("b" + b);
            ';
printLog(str);//可以直接输出格式

let name = 'Jack';

printLog("I'm $(name)");//will print I'am Jack

function sum(flag = true)//可以设定默认参数

arrow function, 不会创建function scope的作用于，不需要给this中间变量

var [a,b,c] = [3,8,10];//数组的解构

var [s,t,r] = "Vue";//字符串解构

var {x,y} = {m:1,n:2};//对象的解构

function sum([x,y]){
    return x + y;
}

sum([2,8]);


函数rest参数和扩展
function sum(...m){
    let total = 0;
    for(var i of m){
        total+=i;
    }
}

let num3 = (...m)=>{....}

//another way to use ...
console.log(...[4,8]);//output should be 4 8

arr1.concat(arr2);// ==
[...arr1,...arr2]


PROMISE
let checkLogin = function(){
    new Promise(function(resolve,reject){
        if(...){
            resolve({
                a:1,
                b:2
            })
        }else{
            reject({
                c:3,
                d:4
            })
        }
    })
}


checkLogin().then((res)=>{}).catch((err)=>{});

Promise.all([checkLogin(),getUseInfo()]).then([res1,res2] =>{})


### header, footer, bread

### setup express


后台服务起也启动， 并且通过
proxyTable: {
    ’/goods‘:{
        target:'http://localhost:3000'
    }
}中设置，控制跨域访问


###pagination on server side
let skip = (page - 1) * pageSize
let goodsModel = Goods.find(params).skip(skip).limit(pageSize)
