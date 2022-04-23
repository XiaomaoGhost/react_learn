/**
 * 作者：Mr.wang
 * 时间：2022/4/11
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import {nanoid} from "nanoid"
import headInput from "./index.module.css"
export default class HeadInput extends Component {
    addShowData = (event)=>{
        const {which,target} = event
        if (which !== 13) return
        if (target.value.trim() === "") {
            alert("输入不能为空！！")
            return;
        }

        const obj = {
            id:nanoid(),
            name:target.value,
            done:false
        }
        this.props.addShowData(obj)
        target.value = ""
    }
    inputRef = React.createRef();
    render() {

        return (
            <div>
                <input ref={this.inputRef} className={headInput.input} onKeyUp={this.addShowData}/>
            </div>
        );
    }
}