/**
 * 作者：Mr.wang
 * 时间：2022/4/16
 * 文件名：person
 * 项目名称：脚手架
 * WebStorm
 */
import {ADD_PERSON} from "../constant"
export const addPerson = (personObj)=>{
    return {
        type : ADD_PERSON,
        data:personObj
    }
}