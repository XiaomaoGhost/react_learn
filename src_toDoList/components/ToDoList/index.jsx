/**
 * 作者：Mr.wang
 * 时间：2022/4/11
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import React, {Component} from "react";
import HeadInput from "../HeadInput";
import ListArea from "../ListArea";
import Footer from "../Footer";
import toDoList from "./index.module.css";

export default class ToDoList extends Component {
    state = {
        dataList:[
            {id:1,name:"吃饭",done:false},
            {id:2,name:"睡觉",done:false},
        ]
    }
    render() {
        return (
            <div className={toDoList.main}>
                <HeadInput addShowData = {this.addShowData}/>
                <ListArea showData={this.state.dataList} delItem={this.delItem} selectItem = {this.selectItem}/>
                <Footer selectAll = {this.selectAll} delDone={this.delDone} allLength = {this.getAllList()} allOk = {this.getOk()}/>
            </div>
        );
    }
    /**
     * 添加一条事情
     * @param addData 添加数据的对象{id:xxx,name:xxx,done:xxx}
     */
    addShowData = (addData)=>{
            const {dataList} = this.state;
            this.setState({
                dataList: [addData,...dataList]
            })
    }
    /**
     * 选择一个项目，改变其状态值
     * @param id 选择的对象ID
     */
    selectItem = (id)=>{
        let dataList = this.state.dataList
        let newDataList = dataList.map((item)=>{
            if (item.id === id) return {...item,done:!item.done}
            else return item
        })

        this.setState({dataList:newDataList})
    }
    /**
     * 删除一条事情
     * @param id 删除记录的ID
     */
    delItem = (id)=>{
        let {dataList} = this.state
        const newDataList = dataList.filter((obj)=>{
            return obj.id != id;
        })
        this.setState({
            dataList:newDataList
        })
    }
    /**
     * 选择所有事情
     * @param tag 是否选择
     */
    selectAll = (tag)=>{
        let {dataList} = this.state
        const newDataList = dataList.map((obj)=>{
            return {...obj,done:tag}
        })
        this.setState({
            dataList:newDataList
        })
    }
    /**
     * 删除已经选择到的记录
     */
    delDone = ()=>{
        let {dataList} = this.state
        const newDataList = dataList.filter((obj)=>{
            return !obj.done
        })

        this.setState({
            dataList:newDataList
        })
    }
    /**
     * 得到所有记录的长度
     * @returns {number} 返回所有记录的长度
     */
    getAllList = () => {
        return this.state.dataList.length
    }
    /**
     * 返回已经选择完成的记录
     * @returns {number} 返回完成记录的条数
     */
    getOk = ()=>{
        let count = 0;
        let dataList = this.state.dataList
        count = dataList.reduce((pre,item)=>{return pre + (item.done?1:0)},0)
        return count;
    }
}