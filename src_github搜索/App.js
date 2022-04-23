
import './App.css';
import React,{Component} from "react";
import Search from "./components/Search";
import List from "./components/List";
export default class App extends Component{
    state = {
        dataList: [

        ]
    }
    getData = (dataObj)=>{
        this.setState({
            dataList:dataObj
        })
    }
    render() {
        return(
            <div className='main'>
               <Search getData={this.getData}/>
               <List dataList={this.state.dataList}/>
            </div>
        )
    }
}
