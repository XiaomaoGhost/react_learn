/**
 * 作者：Mr.wang
 * 时间：2022/4/14
 * 文件名：count_reducer
 * 项目名称：脚手架
 * WebStorm
 */

/**
 * 该文件用于创建一个为count组件服务的reducer,reducer本质就是一个函数
 * reducer嘎函数会接到两个参数，分别是preState之前的状态，action动作对象
 */
// 设置初始状态
const initState = 0;
export default function countReducer(preState = initState,action) {
    const {type,data} = action
    // 根据type决定如何加工数据
    switch (type) {
        case "increment":
            return  preState + data;
        case "decrement":
            return preState - data;
        default :
            return preState;
    }
}