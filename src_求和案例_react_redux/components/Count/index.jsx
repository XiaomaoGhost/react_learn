/**
 * 作者：Mr.wang
 * 时间：2022/4/14
 * 文件名：Index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";

export default class Count extends Component {
    //加
    increment = ()=>{
        const { value } = this.selectNumber;
        this.props.increment(value)
    }
    // 减
    decrement = ()=>{
        const { value } = this.selectNumber;
        this.props.decrement(value)
    }
    // 奇数加
    incrementIfOdd = ()=>{
        const { value } = this.selectNumber;
        this.props.incrementIfOdd(value)
    }
    // 异步加
    incrementAsync = ()=>{
        const { value } = this.selectNumber;
        this.props.incrementAsync(value,500)

    }
    render() {
        const {count} = this.props;
        return (
            <div>
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