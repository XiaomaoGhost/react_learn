/**
 * 作者：Mr.wang
 * 时间：2022/4/13
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
const detailData = [
    {id:"01",title:"消息1",content : "你好，消息1"},
    {id:"02",title:"消息2",content : "你好，消息2"},
    {id:"03",title:"消息3",content : "你好，消息3"}
]
export default class Detail extends Component {
    render() {
        /*接受state参数*/
        const {state} = this.props.location
        const result =  detailData.find(detailObj=>{
            return detailObj.id === state.id;
        })
        return (
            <ul>
                <li>ID:{state.id}</li>
                <li>TITLE:{result.title}</li>
                <li>COUNT:{result.content}</li>
            </ul>
        );
    }
}