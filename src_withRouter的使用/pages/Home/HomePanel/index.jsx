/**
 * 作者：Mr.wang
 * 时间：2022/4/13
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import {NavLink,Route,Switch,Redirect} from "react-router-dom"

import News from "./News";
import Message from "./Message";
export default class HomePanel extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="list-group-item" to="/home/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className="list-group-item" to="/home/message">Message</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path='/home/news' component={News}/>
                    <Route path = "/home/message" component={Message}/>
                    <Redirect to='/home/news'/>
                </Switch>

            </div>
        );
    }
}