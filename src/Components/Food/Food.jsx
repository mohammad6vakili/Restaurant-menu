import React, { useEffect , useState} from 'react';
import "./Food.css";
import sliderBackBtn from "../../assets/images/63-631354_drop-down-menu-down-arrow-html-hd-png copy 2.png";
import { useHistory } from 'react-router';
import {setCartData , setCart} from "../../Store/Action";
import { useSelector , useDispatch} from 'react-redux';
import { Radio , Button} from 'antd';
import foodImage from "../../assets/images/Layer 4.png";


const Food=()=>{
    
    const dispatch=useDispatch();
    const history=useHistory();
    const foodData=useSelector(state=>state.Reducer.foodData);
    const cartData=useSelector(state=>state.Reducer.cartData);
    const cart=useSelector(state=>state.Reducer.cart);
    const [hello , setHello]=useState(true);
    const [size , setSize]=useState("متوسط");
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
    
    useEffect(()=>{
        if(foodData===null){
            history.push("/category");
        }
        window.scrollTo(0, 0);
    },[])

    const addToCart=()=>{
        foodData.count=foodData.count+1;
        cartData.push(foodData);
        cartHandler();
    }
    
    return(
        <div className="food">
            <img 
                onClick={()=>history.push("/foods")}
                src={sliderBackBtn} 
                className="category-back-btn" 
                alt="back button" 
            />
            <div className="food-first-row">
                <div>{foodData && parseInt(foodData.price).toLocaleString()}</div>
                <div>{foodData && foodData.fName}</div>
            </div>
            <div className="food-second-row">
                <div>
                    <span>{foodData && foodData.desc}</span>
                    <span>{foodData && foodData.desc}</span>
                    <span>{foodData && foodData.desc}</span>
                    <span>{foodData && foodData.desc}</span>
                </div>
            </div>
            <div className="food-third-row">
                <div>
                    <img src={foodImage} alt="food" />
                </div>
                <div>
                    <Radio.Group onChange={(e)=>foodData.size=e.target.value} defaultValue={foodData && foodData.size}>
                        <Radio value="صغیر">صغیر</Radio>
                        <Radio value="متوسط">متوسط</Radio>
                        <Radio value="کبیر">کبیر</Radio>
                    </Radio.Group>
                </div>
            </div>
            <div className="food-fourth-row">
                <Button onClick={addToCart}>
                    اًضف اٍلی الطلب
                </Button>
            </div>
        </div>
    )
}
export default Food;