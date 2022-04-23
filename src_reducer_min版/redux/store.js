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
// 引入createStore,用于常见store对象
import {createStore} from "redux"
// 引入为count组件服务的reducer
import countReducer from "./count_reducer"
// 暴露store
export default createStore(countReducer)
