/**
 * 作者：Mr.wang
 * 时间：2022/4/15
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */

//引入UI组件
import CountUI from "../../components/Count";

import {
    createIncrementAction,
    createDecrementAction,
    createDecrementSyncAction
} from "../../redux/count_action"
//引入connect用于链接UI组件与redux
import {connect} from "react-redux"
// 函数的返回值对象中的key就作为传递给UI组件的props的值 -- 状态
function mapStateToProps(state) {
    return {count:state}
}

// 返回操作状态的方法
function mapDispatchToProps(dispatch) {
    return {
        increment:(value)=>{
            dispatch(createIncrementAction(value*1))
        },
        decrement:(value)=>{
            dispatch(createDecrementAction(value * 1))
        },
        incrementIfOdd:(value)=>{
            value *= 1;
            if (value%2!==0){
                dispatch(createIncrementAction(value));
            }
        },
        incrementAsync:(value,time)=>{
            dispatch(createDecrementSyncAction(value * 1,time))
        }
    }
}
//创建并暴露一个count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)