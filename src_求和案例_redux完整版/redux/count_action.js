/**
 * 作者：Mr.wang
 * 时间：2022/4/15
 * 文件名：count_action
 * 项目名称：脚手架
 * WebStorm
 */
import {DECREMENT,INCREMENT} from "./constant"
export const createIncrementAction = (data)=> ({type : INCREMENT, data})
export const createDecrementAction = (data)=>({type : DECREMENT, data})
