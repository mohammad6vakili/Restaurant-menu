import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Category from './Components/Category/Category';
import { Switch , Route } from 'react-router-dom';

const App=()=>{
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Category}/>
      </Switch>
    </div>
  );
}
export default App;
