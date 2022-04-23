/**
 * 作者：Mr.wang
 * 时间：2022/4/15
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */

import {
    createIncrementAction,
    createDecrementAction,
    createDecrementSyncAction
} from "../../redux/actions/count";
//引入connect用于链接UI组件与redux
import {connect} from "react-redux";
import React, {Component} from "react";

// 定义UI组件
class CountUI extends Component {
    //加
    increment = ()=>{
        const { value } = this.selectNumber;
        this.props.increment(value*1)
    }
    // 减
    decrement = ()=>{
        const { value } = this.selectNumber;
        this.props.decrement(value*1)
    }
    // 奇数加
    incrementIfOdd = ()=>{
        const { value } = this.selectNumber;
        if ((this.props.count) % 2 !== 0) {
            this.props.incrementIfOdd(value*1)
        }

    }
    // 异步加
    incrementAsync = ()=>{
        const { value } = this.selectNumber;
        this.props.incrementAsync(value*1,500)

    }
    render() {
        const {count,presNumber} = this.props;
        return (
            <div>
                <h2>我是Count组件，下方人数为{presNumber}</h2>
                <h1>当前求和为：{count}</h1>
                <select ref={c=>this.selectNumber = c}>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;
            </div>
        );
    }
}

//创建并暴露一个count的容器组件
export default connect(
    // 函数的返回值对象中的key就作为传递给UI组件的props的值 -- 状态
    state=>({count:state.he,presNumber:state.rens.length}),
    // 函数的返回值对象中的key就作为传递给UI组件的props的值 -- 状态
    // mapDispatchToProps简写方式
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementIfOdd:createIncrementAction,
        incrementAsync:createDecrementSyncAction
})(CountUI)
