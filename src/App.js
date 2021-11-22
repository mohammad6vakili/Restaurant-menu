import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Category from './Components/Category/Category';
import Foods from "./Components/Foods/Foods";
import Food from "./Components/Food/Food";
import { Switch , Route , Redirect } from 'react-router-dom';
import axios from 'axios';
import { useSelector , useDispatch} from 'react-redux';
import { setCart, setCartData } from './Store/Action';
import cartImage from "./assets/images/Group.svg";
import { useLocation,useHistory } from 'react-router';
import Fade from "react-reveal";
import { Button, Input, message, Modal } from 'antd';
import xImage from "./assets/images/x.png";
import plusImage from "./assets/images/plus.png";
import minesImage from "./assets/images/mines.png";
import whatsapp from "./assets/images/whatsapp.png";

const App=()=>{
  const location=useLocation();
  const history=useHistory();
  const dispatch=useDispatch();
  const [address , setAddress]=useState("");
  const [mobile , setMobile]=useState("");
  const cartData=useSelector(state=>state.Reducer.cartData);
  const lang=useSelector(state=>state.Reducer.lang);
  const res=useSelector(state=>state.Reducer.res);
  const cart=useSelector(state=>state.Reducer.cart);
  const [hello , setHello]=useState(true);

  
  const cartHandler=()=>{
    if(cart===true){
      dispatch(setCart(false));
    }else{
      dispatch(setCart(true));
    }
  }
  
  const remove=(data)=>{
    dispatch(setCartData(
      cartData.filter(cd=>{
       return cd.id!==data.id || cd.size!==data.size;
      })
    ))
    data.count=0;
  }

  const increase=(data)=>{
      setHello(!hello);
      cartData.map((d)=>{
        if(d.id===data.id && d.size===data.size){
          return d.count==d.count++;
        }
      })
  }

  const decrease=(data)=>{
    if(data.count && data.count>1){
      setHello(!hello);
      cartData.map((d)=>{
        if(d.id===data.id && d.size===data.size){
          return d.count==d.count--;
        }
      })  
    }else if(data.count===1){
      data.count=0;
      remove(data);
    }
  }

  const saveOrder=async()=>{
    const postData={};
    postData.restaurant=res;
    postData.address=address;
    postData.mobile=mobile;
    postData.items=cartData.map((cd)=>{
      if(cd.size===null){
        return {id:cd.id,qty:cd.count,extrasSelected:null}
      }else{
        return {id:cd.id,qty:cd.count,extrasSelected:[{id:cd.size}]}
      }
    })
    try{
      const response=await axios.post("https://admin.btob-restaurant.com/api/v3/submit_order",postData);
      if(response.status===200){        
        message.success(response.data.message);
        dispatch(setCart(false));
        window.location.replace(response.data.paymentLink);
      }
    }catch(err){
      console.log(err);
      message.error("Failed");
    }
  }

  useEffect(()=>{
    dispatch(setCartData(cartData));
    dispatch(setCartData(cartData));
  },[cartData])

  useEffect(()=>{
    dispatch(setCartData(cartData));
  },[hello])

  useEffect(()=>{
    if(location!=="/"){
      history.push("/");
    }
  },[])
  
  return (
    <div className="App">
      {cart === false && location.pathname!=="/" &&
        <div onClick={cartHandler} className="cart-icon">
          <img src={cartImage} alt="cart" />
        </div>
      }
      <Modal
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
            <span onClick={()=>console.log(cartData)}>
              {lang==="ar" && "اطلب"}
              {lang==="en" && "Order"}
              {lang==="ku" && "سفارش"}
            </span>
          </div>
          <div className="cart-items">
            {cartData && cartData.map((cd)=>(
              <div className="cart-item">
                <div>
                  <div>
                  {lang==="ar" && cd.name.ar}
                  {lang==="en" && cd.name.en}
                  {lang==="ku" && cd.name.fa}
                    {cd.extras.map((ex)=>{
                    if(ex.id===cd.size){
                      if(lang==="ar"){
                        return " - " + ex.name.ar
                      }else if(lang==="en"){
                        return " - " + ex.name.en
                      }else if(lang==="ku"){
                        return " - " + ex.name.fa
                      }
                    }
                  })}</div>
                  <div>
                    <div style={{display:"flex",alignItems:"center"}}>
                      <img onClick={()=>remove(cd)} src={xImage} alt="operation" />
                      <img onClick={()=>increase(cd)} src={plusImage} alt="operation" />
                      <img onClick={()=>decrease(cd)} src={minesImage} alt="operation" />
                    </div>
                    <span style={{fontSize:"16px"}}>{parseInt(cd.price).toLocaleString()} * {cd.count}</span>
                  </div>
                </div>
                <div>
                  <img 
                    style={{width:"100%",borderRadius:"20px 0 0 20px",height:"100%"}} 
                    src={cd.icon} 
                  />
                </div>
              </div>
            ))}
            <div style={{marginTop:"25px",fontSize:"18px",textAlign:"right"}}>
              {lang==="ar" && "المجموع"}
              {lang==="en" && "Total"}
              {lang==="ku" && "مجموع"}
              : {cartData.reduce((a, c) => a + c.price * c.count, 0).toLocaleString()}
            </div>
            <Input
              type="tel"
              onChange={(e)=>setMobile(e.target.value)}
              className="cart-input"
              placeholder={
                lang==="ar" && "رقم الهاتف",
                lang==="en" && "Telephone Number",
                lang==="ku" && "شماره تلفن"
              }
            />
            <Input
              type="text"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="cart-input"
              placeholder={
                lang==="ar" && "العنوان",
                lang==="en" && "Address",
                lang==="ku" && "آدرس"
              }
            />
            <Button 
              disabled={address.length===0}
              style={address==="" ? {opacity:".5"} : {opacity:"1"}} 
              className="cart-button"
              onClick={saveOrder}
            >
              <img src={whatsapp} alt="call" />
              <span>
              {lang==="ar" && "اطلب عبر واتس اٍب"}
              {lang==="en" && "Order via WhatsApp"}
              {lang==="ku" && "سفارش از طریق واتساپ"}
              </span>
            </Button>
          </div>
        </div>
      </Modal>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/category" component={Category}/>
        <Route path="/food" component={Food}/>
        <Route path="/foods" component={Foods}/>
      </Switch>
    </div>
  );
}
export default App;
