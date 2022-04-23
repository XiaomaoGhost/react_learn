/**
 * 作者：Mr.wang
 * 时间：2022/4/11
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import welcome from "./index..module.css"
export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h1 className={welcome.title}>Welcome</h1>
            </div>
        );
    }
}