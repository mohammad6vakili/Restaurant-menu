import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Category from './Components/Category/Category';
import Foods from "./Components/Foods/Foods";
import Food from "./Components/Food/Food";
import { Switch , Route , Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App=()=>{
  const foodsData=useSelector(state=>state.Reducer.foodsData);
  const foodData=useSelector(state=>state.Reducer.foodData);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/category" component={Category}/>
        <Route path="/food" component={Food}/>
        {foodsData !==null ? <Route path="/foods" component={Foods}/> : <Redirect to="/category"/>}
      </Switch>
    </div>
  );
}
export default App;
