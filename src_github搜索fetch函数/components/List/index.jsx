/**
 * 作者：Mr.wang
 * 时间：2022/4/12
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import pubSub from "pubsub-js"
import Item from "../Item";

import list from "./index.module.css"

export default class List extends Component {
    state = {
        dataList: [

        ]
    }
    componentDidMount() {
        //订阅消息
        pubSub.subscribe("getData",(msg,data) =>{
            this.setState({
                dataList:data
            })
        })
    }

    render() {
        const {dataList} = this.state
        if (dataList.length > 0){
            return (
                <div className={list.main}>

                    {dataList.map(item=>{
                        return <Item itemOne={item} key = {item.id} />
                    })}
                </div>
            );
        }else {
            return (
                <div className = {list.noSearch}>没有搜索到对应的用户</div>
            )
        }

    }
}