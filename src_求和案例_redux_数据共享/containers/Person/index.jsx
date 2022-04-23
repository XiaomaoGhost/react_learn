/**
 * 作者：Mr.wang
 * 时间：2022/4/16
 * 文件名：index
 * 项目名称：脚手架
 * WebStorm
 */
import {nanoid} from "nanoid"
import React, {Component} from "react";
import {connect} from "react-redux"
import {addPerson} from "../../redux/actions/person";


class Person extends Component {
    submit = ()=>{
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj = {id:nanoid,name,age};
        this.props.addPerson(personObj)
    }
    render() {
        const {persons,count} = this.props
        return (
            <div>
                <h1>当前求和为：{count}</h1>
                <input ref={c=>this.nameNode = c} placeholder="请输入姓名"/>
                <input ref={c=>this.ageNode = c} placeholder="请输入年龄"/>
                <button onClick={this.submit}>提交</button>
                <ul>
                    {persons.map(item=>{
                        return <li key = {item.id}>姓名--{item.name},姓名--{item.age}</li>
                    })}
                </ul>
            </div>
        );
    }
}
export default connect(
    state => ({persons:state.rens,count:state.he}),
    {
        addPerson
    }
)(Person)