import React, { Component } from "react";
import "./App.css";
import {Route, BrowserRouter , Switch} from 'react-router-dom';
import home from "./home";
import './Signup';
import App from "./Signup";

class app extends Component {

  render() {
    
    return (
            <BrowserRouter>
              <div>
                  <Switch>
                    <Route path = "/" component={App} exact/>
                  <Route path="/home" component={home} exact/>
                </Switch>
              </div> 
            </BrowserRouter>
      
    );
  }
}
export default app;
