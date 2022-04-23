
import './App.css';
import React,{Component} from "react";
 
import About from "./components/About";
import Home from "./components/Home";
export default class App extends Component{

    render() {
        return(
            <div className='main'>
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <div className="page-header"><h2>React Router Demo</h2></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                {/*设置history的模式路由---编写路由链接*/}
                                    <Link to="/about" className="list-group-item">About</Link>
                                    <Link to="/home" className="list-group-item">Home</Link>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/*注册路由*/}
                                        <Route path="/about" component={About}/>
                                        <Route path="/home" component={Home}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
