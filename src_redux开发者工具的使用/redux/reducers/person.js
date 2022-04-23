/**
 * 作者：Mr.wang
 * 时间：2022/4/17
 * 文件名：person
 * 项目名称：脚手架
 * WebStorm
 */
import {ADD_PERSON} from "../constant"
import {nanoid} from "nanoid"
const initState = [{id:nanoid,name:"tom",age:18}]


export default function personReducer(perState = initState,action) {
    const {type,data} = action;
    switch (type) {
        case ADD_PERSON :
            return [data,...perState];
        default :
            return perState;
    }
}