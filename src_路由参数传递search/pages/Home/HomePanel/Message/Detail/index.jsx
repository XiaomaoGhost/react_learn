/**
 * 作者：Mr.wang
 * 时间：2022/4/13
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import qs from "querystring"
const detailData = [
    {id:"01",title:"消息1",content : "你好，消息1"},
    {id:"02",title:"消息2",content : "你好，消息2"},
    {id:"03",title:"消息3",content : "你好，消息3"}
]
export default class Detail extends Component {
    render() {
        /*接受search参数*/
        const {search} = this.props.location
        const {id} = qs.parse(search.slice(1))
        const result =  detailData.find(detailObj=>{
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{result.title}</li>
                <li>COUNT:{result.content}</li>
            </ul>
        );
    }
}