import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Category from './Components/Category/Category';
import Foods from "./Components/Foods/Foods";
import Food from "./Components/Food/Food";
import { Switch , Route } from 'react-router-dom';

const App=()=>{
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/category" component={Category}/>
        <Route path="/foods" component={Foods}/>
        <Route path="/food" component={Food}/>
      </Switch>
    </div>
  );
}
export default App;
