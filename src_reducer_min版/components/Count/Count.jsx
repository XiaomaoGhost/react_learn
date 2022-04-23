/**
 * 作者：Mr.wang
 * 时间：2022/4/14
 * 文件名：Index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import store from "../../redux/store";


export default class Count extends Component {
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({})
        })
    }

    //加
    increment = ()=>{
        const { value } = this.selectNumber;
        store.dispatch({
           type : "increment",
           data:value*1
       })
    }
    // 减
    decrement = ()=>{
        const { value } = this.selectNumber;
        store.dispatch({
            type : "decrement",
            data:value*1
        })
    }
    // 奇数加
    incrementIfOdd = ()=>{
        const { value } = this.selectNumber;
        const count = store.getState();
        if (count%2 !== 0) {
            store.dispatch({
                type : "increment",
                data:value*1
            })
        }

    }
    // 异步加
    incrementAsync = ()=>{
       setTimeout(()=>{
           const { value } = this.selectNumber;

           store.dispatch({
               type : "increment",
               data:value*1
           })
       },500)

    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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