/**
 * 作者：Mr.wang
 * 时间：2022/4/11
 * 文件名：Index
 * 项目名称：脚手架
 */
import React, {Component} from "react";
/*在引入模块化的css文件时可以将css文件作为一个模块对象使用 */
import hello from "./index..module.css";
export default class Hello extends Component {
    render() {
        return (
            <div>
                <h1 className={hello.title}>Hello React</h1>
            </div>
        );
    }
}