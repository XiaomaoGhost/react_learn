
import './App.css';
import React,{Component} from "react";
import ToDoList from "./components/ToDoList";
export default class App extends Component{
    render() {
        return(
            <div>
                <ToDoList/>
            </div>
        )
    }
}
