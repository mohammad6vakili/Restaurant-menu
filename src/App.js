import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Category from './Components/Category/Category';
import Foods from "./Components/Foods/Foods";
import Food from "./Components/Food/Food";
import { Switch , Route , Redirect } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import { setCart, setCartData } from './Store/Action';
import cartImage from "./assets/images/Group.svg";
import { useLocation } from 'react-router';
import Fade from "react-reveal";
import { Button, Input, Modal } from 'antd';
import xImage from "./assets/images/x.png";
import plusImage from "./assets/images/plus.png";
import minesImage from "./assets/images/mines.png";
import whatsapp from "./assets/images/whatsapp.png";

const App=()=>{
  const location=useLocation();
  const dispatch=useDispatch();
  const [address , setAddress]=useState("");
  const foodsData=useSelector(state=>state.Reducer.foodsData);
  const foodData=useSelector(state=>state.Reducer.foodData);
  const cartData=useSelector(state=>state.Reducer.cartData);
  const cart=useSelector(state=>state.Reducer.cart);
  const [hello , setHello]=useState(true);
  const counter=useSelector(state=>state.Reducer.counter);
  
  const cartHandler=()=>{
    if(cart===true){
      dispatch(setCart(false));
    }else{
      dispatch(setCart(true));
      dispatch(setCartData(
        cartData && cartData.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
      ))
    }
  }
  
  const remove=(data)=>{
    dispatch(setCartData(
      cartData.filter((cd)=>cd.id!==data.id)
    ))
  }
  const increase=(data)=>{
      setHello(!hello);
      cartData.map((d)=>{
        if(d.id===data.id){
          return d.count==d.count++;
        }
      })
  }
  const decrease=(data)=>{
    if(data.count>1){
      setHello(!hello);
      cartData.map((d)=>{
        if(d.id===data.id){
          return d.count==d.count--;
        }
      })  
    }else if(data.count===1){
      remove(data);
    }
  }

  useEffect(()=>{
    dispatch(setCartData(cartData));
    dispatch(setCartData(cartData));
  },[cartData])

  useEffect(()=>{
    dispatch(setCartData(cartData));
  },[hello])
  
  return (
    <div className="App">
      {cart === false && location.pathname!=="/" &&
        <div onClick={cartHandler} className="cart-icon">
          <img src={cartImage} alt="cart" />
        </div>
      }
      <Modal
        title="لطفا کد ارسال شده را وارد کنید" 
        visible={cart}
        closable={true}
        className="cart-modal"
        onOk={()=>dispatch(setCart(false))} 
        onCancel={()=>dispatch(setCart(false))} 
        style={{marginBottom:"100px"}}
        footer={[]}
      >
        <div className="cart-main">
          <div className="cart-title">
            <span>اطلب</span>
          </div>
          <div className="cart-items">
            {cartData && cartData.map((data)=>(
              <div className="cart-item">
                <div>
                  <div>{data.fName} - {data.size}</div>
                  <div>
                    <div style={{display:"flex",alignItems:"center"}}>
                      <img onClick={()=>remove(data)} src={xImage} alt="operation" />
                      <img onClick={()=>increase(data)} src={plusImage} alt="operation" />
                      <img onClick={()=>decrease(data)} src={minesImage} alt="operation" />
                    </div>
                    <span style={{fontSize:"16px"}}>{parseInt(foodData.price).toLocaleString()} * {foodData.count}</span>
                  </div>
                </div>
                <div>
                  <img 
                    style={{width:"100%",borderRadius:"30px 0 0 30px",height:"100%"}} 
                    src={data.src} 
                  />
                </div>
              </div>
            ))}
            <div style={{marginTop:"25px",fontSize:"18px",textAlign:"right"}}>
              المجموع : {cartData.reduce((a, c) => a + c.price * c.count, 0).toLocaleString()}
            </div>
            <Input
              type="tel"
              className="cart-input"
              placeholder="رقم الهاتف" 
            />
            <Input
              type="text"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="cart-input"
              placeholder="العنوان" 
            />
            <Button 
              disabled={address.length===0}
              style={address==="" ? {opacity:".5"} : {opacity:"1"}} 
              className="cart-button"
              onClick={()=>console.log(address)}
            >
              <img src={whatsapp} alt="call" />
              <span>اطلب عبر واتس اٍب</span>
            </Button>
          </div>
        </div>
      </Modal>
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
