/**
 * 作者：Mr.wang
 * 时间：2022/4/13
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";

export default class Message extends Component {

    render() {
        return (
            <ul>
                <li>
                    <a href="/message1">message001</a>&nbsp;&nbsp;
                </li>
                <li>
                    <a href="/message2">message002</a>&nbsp;&nbsp;
                </li>
                <li>
                    <a href="/message/3">message003</a>&nbsp;&nbsp;
                </li>
            </ul>
        );
    }
}