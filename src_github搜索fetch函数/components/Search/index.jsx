/**
 * 作者：Mr.wang
 * 时间：2022/4/12
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import axios from "axios";
import pubSub from "pubsub-js";
import search from "./index.module.css"
export default class Search extends Component {

    state = {
        searchValue:""
    }
    onChange = (event)=>{
        const {value} = event.target
        this.setState({
            searchValue:value
        })
    }
    search= async ()=> {
        const {searchValue} = this.state
        if (searchValue.trim() == "") return
        fetch("https://api.github.com/search/users?q=" + searchValue).then(
            response => {
                return response.json()
            },
            // error =>{
            //     console.log(error)
            //     return new Promise(()=>{})
            // }
        ).then(
            res => {
                pubSub.publish("getData", res.items)
            },
            // error=>{
            //     console.log("获取很失败",error)
            // }
        ).catch(
            error => {
                console.log(error)
            }
        )
        try {
            const response = await fetch("https://api.github.com/search/users?q=" + searchValue);
            const result = response.json();
            console.log(result.items)
        }catch (e) {
            console.log(e)
        }
    }
    render() {
        return (
            <div>
                <input className={search.ipt} onChange={this.onChange}/>
                <button className={search.btn} onClick={this.search}>Search</button>
            </div>
        );
    }
}