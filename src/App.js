import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Category from './Components/Category/Category';
import Foods from "./Components/Foods/Foods";
import Food from "./Components/Food/Food";
import { Switch , Route , Redirect } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import { setCart } from './Store/Action';
import cartImage from "./assets/images/Group.svg";
import Fade from "react-reveal";
import Modal from "react-modal";

const App=()=>{
  const dispatch=useDispatch();
  const foodsData=useSelector(state=>state.Reducer.foodsData);
  const foodData=useSelector(state=>state.Reducer.foodData);
  const cart=useSelector(state=>state.Reducer.cart);
  const cartHandler=()=>{
    if(cart===true){
      dispatch(setCart(false));
    }else{
      dispatch(setCart(true));
    }
  }
  return (
    <div className="App">
      {cart === false &&
        <div onClick={cartHandler} className="cart-icon">
          <div>0</div>
          <img src={cartImage} alt="cart" />
        </div>
      }
      {cart===true &&
        <Fade right>
          <Modal 
            isOpen={true}
            onRequestClose={()=>dispatch(setCart(false))}
          >
            <div className="cart-body">
              
            </div>
          </Modal>
        </Fade>
      }
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
