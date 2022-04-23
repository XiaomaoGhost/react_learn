
import './App.css';
import React,{Component} from "react";
import {NavLink,Route,Redirect,Switch} from "react-router-dom"
import Head from "./components/Head"
import About from "./pages/About";
import Home from "./pages/Home";
export default class App extends Component{

    render() {
        return(
            <div className='main'>
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                          <Head/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                {/*设置history的模式路由---编写路由链接*/}
                                    <NavLink to="/about" className="list-group-item">About</NavLink>
                                    <NavLink to="/home" className="list-group-item">Home</NavLink>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/*注册路由*/}
                                    <Switch>
                                        <Route path="/about" component={About}/>
                                        <Route path="/home" component={Home}/>
                                        <Redirect to = "/about"/>
                                    </Switch>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
