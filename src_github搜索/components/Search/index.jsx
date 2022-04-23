/**
 * 作者：Mr.wang
 * 时间：2022/4/12
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import axios from "axios";

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
    search=()=>{
        const {searchValue} = this.state
        if (searchValue.trim() == "") return

        axios.get("https://api.github.com/search/users?q="+searchValue).then(
            response =>{
                this.props.getData(response.data.items)
            },
            error=>{
                console.log(error)
            }
        )
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