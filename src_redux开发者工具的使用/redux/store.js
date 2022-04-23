/**
 * 作者：Mr.wang
 * 时间：2022/4/14
 * 文件名：store
 * 项目名称：脚手架
 * WebStorm
 */
/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
// 引入createStore,用于创建store对象
// 引入applyMiddleware用于执行函数类型的action
// 引入 combineReducers 用于合并所有的reducer
import {createStore,applyMiddleware,combineReducers} from "redux"
// 引入为count组件服务的reducer
import countReducer from "./reducers/count"
import personReducer from "./reducers/person";
// 引入redux-thunk用于异步redux
import thunk from "redux-thunk"

import {composeWithDevTools} from "redux-devtools-extension"

const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
})
// 暴露store
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
