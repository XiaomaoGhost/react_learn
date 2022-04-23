/**
 * 作者：Mr.wang
 * 时间：2022/4/13
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import Detail from "./Detail";
import {Link,Route} from "react-router-dom"
export default class Message extends Component {
    state = {
        messageArr : [
            {id:"01",title:"消息1"},
            {id:"02",title:"消息2"},
            {id:"03",title:"消息3"}
        ]
    }
    pushShow = (id)=>{
        this.props.history.push("/home/message/detail",{
            id : id
        })
    }
    replaceShow = (id)=>{
        this.props.history.replace("/home/message/detail",{
            id : id
        })
    }
    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map(msgObj =>{
                            return (
                                <li key = {msgObj.id}>
                                    {/*向路由传递state参数*/}
                                    <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id}}}>{msgObj.title}</Link>&nbsp;&nbsp;
                                    <button onClick={()=>this.pushShow(msgObj.id)}>push查看</button>
                                    <button onClick={()=>this.replaceShow(msgObj.id)}>replace查看</button>

                                </li>
                            )
                        })
                    }
                </ul>
                {/*路由携带参数 state参数无需声明接收，正常注册路由即可*/}
                <Route path='/home/message/detail' component={Detail}/>
            </div>
        );
    }
}