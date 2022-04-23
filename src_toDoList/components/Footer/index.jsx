/**
 * 作者：Mr.wang
 * 时间：2022/4/11
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import footer from "./index.module.css"
export default class Footer extends Component {
    state = {
        isSelectAll:false
    }
    handleClick = ()=>{
        let {isSelectAll} = this.state
        this.setState({
            isSelectAll:!isSelectAll
        })
        this.props.selectAll(!isSelectAll)
    }
    delDoneAll =()=>{
        if (window.confirm("确定删除所有记录嘛")){
            this.props.delDone()
            this.setState({
                isSelectAll:false
            })
        }

    }


    render() {
        const {allOk,allLength} = this.props;
        return (
            <div className={footer.main}>
                <input type="checkbox"
                       checked={this.state.isSelectAll|| (allOk === allLength && allLength)}
                       onChange = {this.handleClick}
                       className={footer.checkBox}/>
                <span>已完成{allOk}/共{allLength}</span>
                <button className={footer.btn}
                        onClick = {this.delDoneAll}>清楚已完成任务</button>
            </div>
        );
    }
}