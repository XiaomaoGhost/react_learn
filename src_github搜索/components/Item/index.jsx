/**
 * 作者：Mr.wang
 * 时间：2022/4/12
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import item from "./index.module.css"
export default class Item extends Component {
    render() {
        const {itemOne} = this.props;
        return (
            <div className={item.item}>
                <a href = {itemOne.html_url} target="_blank">
                    <div className = {item.imgDiv}>
                        <img src = {itemOne.avatar_url} alt = 'head_portrait'/>
                    </div>
                    <div className={item.text}>
                        {itemOne.login}
                    </div>
                </a>
            </div>
        );
    }
}