/**
 * 作者：Mr.wang
 * 时间：2022/4/12
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import HomePanel from "./HomePanel";
export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <HomePanel/>
            </div>


        );
    }
}