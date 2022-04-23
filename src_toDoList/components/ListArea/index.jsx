/**
 * 作者：Mr.wang
 * 时间：2022/4/11
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import listArea from "./index.module.css"
export default class ListArea extends Component {
    delItem = (id)=>{
        if (window.confirm("确定要删除吗？")){
            this.props.delItem(id);
        }
    }
    selectItem = (id)=>{
        this.props.selectItem(id)
    }
    render() {
        const {showData} = this.props;

        return (
            <div>
                <ul>
                    {showData.map(item => {
                        return (
                            <li key={item.id} className={listArea.item}>
                                <input type="checkbox"
                                       checked={item.done}
                                       onChange = {()=>{ this.selectItem(item.id)}}
                                       className={listArea.checkBox}/>
                                <span>{item.name}</span>
                                <button className={listArea.btn} onClick = {()=>{this.delItem(item.id)}}>删除</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}