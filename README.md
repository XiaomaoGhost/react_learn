1.ajax请求
    1.安装axios依赖 npm i axios
        导入依赖 import axios from 'axios'
    2.发送get请求
        axios.get().then(
        response=>{
        // 成功回调
        }
        error=>{
            // 失败回调
        }
        )
    3.解决跨域问题--设置代理
        1.在package.json添加配置项"proxy": "http://localhost:5000"  -- 服务器的地址  只能配置单个服务器
            获取原则：如果自己有的则不会转发到代理服务器上，如果自己没有则转发代理服务器，如果代理服务器也没有在404
        2.设置多个代理
            1.在src下新建setupProxy.js文件
            编写配置项
            1.导入包
                const {createProxyMiddleware} = require('http-proxy-middleware')
                module.exports = function(app){
                    app.use(
                        createProxyMiddleware('/api2',{
                            target:"http://localhost:5001",//配置转发目标地址(能返回数据的服务器地址)
                            changeOrigin:true,//控制服务器接收到的请求头中host字段的值
                            pathRewrite:{'^/api2':''}//将前缀替换掉
                        }),
                        createProxyMiddleware('/api1',{
                            target:"http://localhost:5000",
                            changeOrigin:true,
                            pathRewrite:{'^/api1':''}
                        })
                
                    )
                }
2.消息订阅与发布 -- 兄弟组件之间通信
    1.工具库--PubSubJs
        下载：npm install pubsub-js -save
        引入库 import pubSub from "pubsub-js"
        消息订阅：
            pubSub.subScribe(消息名，接受函数（msg,data）)
        发布消息：
            pubSub.pluish(消息名，数据)
4.fetch发送请求（关注分离的设计思想）
     try {
        const response = await fetch("https://api.github.com/search/users?q=" + searchValue);
        const result = response.json();
        console.log(result.items)
     }catch (e) {
        console.log(e)
     }
4. react-router-dom插件
   1.安装路由库 npm i react-router
   基本路由的使用
        1.导入包import {Link,Route} from "react-router-dom"
        2.<Link to='/xxx'>Demo</Link>
        2.展示区写Route标签进行路径的匹配
            <Route path='/xxx' component={Demo}>
        3.<App>的外侧包裹了一个<BrowserRouter>或<HasRouter>
5. 路由组件与一般组件
    1.写法不同：
        一般组件<Demo/>
        路由组件<Route path="/demo' component={Demo}/>
    2.存放位置不同：
        一般组件：components
        路由组件：pages
    3.接收到的props不同：
        一般组件：写组件标签时传递了什么，就能收到什么
        路由组件：接收到三个固定的属性
                history:
                    go: ƒ go(n)
                    goBack: ƒ goBack()
                    goForward: ƒ goForward()
                    push: ƒ push(path, state)
                    replace: ƒ replace(path, state)
                location:
                    pathname: "/about"
                    search: ""
                    state: undefined                
                match:
                    params: {}
                    path: "/about"
                    url: "/about"
通过this.props.children可以获取标签体内容
6. Switch的使用
    1.Route组件默认匹配所有，即从上到下一直进行匹配直到所有Route都匹配完才会结束，影响效率
    2.通常情况下，path和component是一一对应的关系。
    3.Switch可以提高路由匹配效率（单一匹配）当匹配到之后就不会继续向下匹配


7. 路由的严格匹配与模糊匹配
    1. 默认使用的是模糊匹配：输入的路径必须要包含匹配的路径，且顺序要一致
    2. 开启严格匹配
        <Route exact path="/about" component={About}/>
    3. 严格模式不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
8. 嵌套路由
    1. 注册子路由时要写上父路由的path值
    2. 路由的匹配是按照注册路由的顺序进行的
9. 向路由组件传递参数
    1. 使用params参数
        路由链接（携带参数） <Link to={`/home/message/detail/${msgObj.id}`}>{msgObj.title}</Link>&nbsp;&nbsp;
        注册路由（声明接收）：<Route path='/home/message/detail/:id' component={Detail}/>
        接收参数：const {id} = this.props.match.params;
    2. 使用search参数
        路由链接（携带参数）：<Link to=’/home/message/detail/?id=01‘>{msgObj.title}</Link>&nbsp;&nbsp;
        注册酷游（无需声明，正常注册即可）：<Route path='/home/message/detail' component={Detail}/>
        接收参数：const search = this.props.location.search
        备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
    3. state参数
        路由链接（携带参数）：<Link to={{pathname:'/home/message/detail',state:{id:‘01’}}}>{msgObj.title}</Link>
        注册酷游（无需声明，正常注册即可）：<Route path='/home/message/detail' component={Detail}/>
        接收参数：const {state} = this.props.location
        备注：刷新也可以保留参数
    4. 编程式路由导航 -- 前提是路由组件
        借助this.props.history对象上的API对操作路由跳转、前进、后退
            this.props.history.push(跳转路径，传递参数) -- 向前跳转
            this.props.history.replace(跳转路径，传递参数) -- 替换当前
            this.props.history.goBack() -- 后退一次
            this.props.history.goForward() -- 前进一次
            this.props.history.go(n) -- 指定次数 正数向前 负数后退
            备注：使用push、replace时可以不设置state，如果想要传递参数可以使用使用 params参数、使用search参数、state参数三者之中的一个方式
10. withRouter可以加工一般组件，让一般组件具备路由组件所特有的API   
        import {withRouter} from "react-router-dom"
        不在直接暴露组件使用该方法加工在返回
            export default withRouter(Head);     
11. BrowserRouter与HashRouter的区别
    1. 底层原理不一样：
        BrowserRouter使用的是H5的history API,不兼容IE9及以下版本。
        HashRouter使用的是URL的哈希值
    2. url表现形式不一样
        BrowserRouter的路径中没有#，例如：localhost:300/demo/test
        HashRouter的路径包含#，例如：localhost:300/#/demo/test
    3. 刷新后对state参数的影响
        1）BrowserRouter没有任何影响，因为state保存在history对象中。
        2）HashRouter刷新后会导致路由state参数的都是。
    4. 备注：HashRouter可以用于解决一些路径参数错误相关的问题。
12. 使用redux状态管理
    1. 安装redux
        npm i redux
    2. redux精简版
        1. 去除组件自身的状态 -- 去除公共的状态
        2. src下建立
            -src
                -redux
                    -store.js
                    -component_reducer.js -- 对应组件的reducer
        3. store.js
            1. 引入redux中的createStore函数，创建一个store
            2. createStore调用时要传入一个为其服务的reducer
            3. 记得暴露store对象
        4. component_reducer.js
            1. reducer的本质是一个函数，接收preState,action，返回加工完后的状态
            2. reducer有两个作用：初始化状态，加工状态
            3. reducer第一次被调用时，时store自动触发的，传递的preState是undefined
        5. 在index.js中检测store中状态的改变，一旦发生改变诚信渲染<App/> -- 通过store的sunScribe()API
        备注：reducer只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。
    2. redux完整版
        新增两个文件
            1. constant.js 放置由于编码疏忽写错action中的type
            2. component_action.js 专门创建action对象
    3. redux异步action版
        1. 明确：延时动作不想交给组件自身，想交给action
        2. 合适需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回。
        3. 具体编码：
            1. 安装中间件,并配置在store中
                npm i redux-thunk
                配置store
                    import {createStore,applyMiddleware} from "redux"
                    import thunk from "redux-thunk"
                    export default createStore(countReducer,applyMiddleware(thunk))
            2. 创建Action的函数不在返回一般对象，而是一个函数，该函数中写异步任务。
            3. 异步任务结束后，分发一个同步的action去真正的操作数据
        4. 备注：异步action不是必须写的，完全可以自己等待异步任务的结果再去分发同步action。 
    4. react_redux的基本使用
        1. 明确两个概念：
            1. UI组件，不能使用任何redux的api，只负责页面的呈现，交互等。
            2. 容器组件，负责和redux通信，将结果交给UI组件。
            4. 容器组件：
                创建新的文件夹containers
                    1. 创建容器组件的jsx文件
                    2. 引入UI组件和connect
                    3. import CountUI from "../../components/Count";
                        import {connect} from "react-redux"
                    4. 编写mapStateToProps和mapDispatchProps函数
                    暴露 connect：export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
        2. 如何创建一个容器组件--靠react-redux的connect函数
            connect(mapStateToProps,mapDispatchProps)(UI组件)
            -mapStateToProps：映射状态，返回一个对象
            -mapDispatchProps：映射操作的方法，返回值是一个对象
        3. 挂载容器组件，并传入store
        4. 备注：容器组件中的store是props传进去的，而不是容器组件中直接引入
    5. react_redux优化
        1. 容器组件和UI组件混成一个文件
        2. 无需自己给容器组件传递store，给<APP/>包裹一个<Provider store={store}>即可
        3. 使用了react_redux后不在自己检查redux中状态的改变了，容器组件可以自动完成这个工作。
        4. mapDispatchToProps也可以简单的写成一个对象
        5. 一个组件要和redux打交道要经过那几步？
            1. 定义好UI组件 -- 不暴露
            2. 引入connect生成一个容器组件，并暴露，写法如下：
                connect(
                    state=>({key:value}),
                    {
                        key:xxAction
                        .....,
                    }
                )(UI组件)
            3. 在UI组件中通过this.props.xxx读取和操作状态 
    6. react_redux数据共享 -- 适用于多组件之间数据共享
        1. 多个组件的reducer使用combineReducers进行合并，合并后的状态是一个对象
        2. 交给store的是reducer，注意最后组件中取出状态的时候记得取到位
    7. redux_devtools的使用
        1. 安装 redux-devtools-extension
            npm i redux-devtools-extension
        2. 在store中引入
            import {composeWithDevTools} from "redux-devtools-extension"
            export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
        3. 浏览器中也要安装对应的工具
    8. 项目打包运行
        1. 执行打包命令 npm run build
        打包编译完生成build文件夹
        2. 全局安装serve库
            npm i serve -g
