/**
 * 作者：Mr.wang
 * 时间：2022/4/13
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import {withRouter} from "react-router-dom"
class Head extends Component {
    go = ()=>{
        this.props.history.goBack();
    }
    back = ()=>{
        this.props.history.goForward();
    }
    render() {
        console.log(this.props)
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick = {this.go}>前进</button>&nbsp;&nbsp;
                <button onClick = {this.back}>后退</button>
            </div>
        );
    }
}
export default withRouter(Head);