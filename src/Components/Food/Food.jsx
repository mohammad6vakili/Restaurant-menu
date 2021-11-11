import React, { useEffect , useState} from 'react';
import "./Food.css";
import sliderBackBtn from "../../assets/images/63-631354_drop-down-menu-down-arrow-html-hd-png copy 2.png";
import { useHistory } from 'react-router';
import {setCartData , setCart} from "../../Store/Action";
import { useSelector , useDispatch} from 'react-redux';
import { Radio , Button , message, Spin} from 'antd';
import foodImage from "../../assets/images/Layer 4.png";
import axios from 'axios';


const Food=()=>{
    
    const dispatch=useDispatch();
    const history=useHistory();
    const foodData=useSelector(state=>state.Reducer.foodData);
    const foods=useSelector(state=>state.Reducer.foods);
    const cartData=useSelector(state=>state.Reducer.cartData);
    const cart=useSelector(state=>state.Reducer.cart);
    const [data , setData]=useState(null);
    const [hello , setHello]=useState(true);
    const [size , setSize]=useState("متوسط");
    const counter=useSelector(state=>state.Reducer.counter);

    const getFood=async()=>{
        try{
            const response = await axios.post("http://admin.btob-restaurant.com/api/v3/food",{
                food:foods
            });
            setData(response.data);
        }catch(err){
            console.log(err);
            message.error("Failed");
        }
    }
    
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
        if(foods===null){
            history.push("/foods");
        }else{
            getFood();
        }
        window.scrollTo(0, 0);
    },[])

    const addToCart=()=>{
        if(data.count){
            data.count=data.count+1;
        }else{
            data.count=1
        }
        cartData.push(data);
        cartHandler();
    }
    
    return(
            <div className="food">
                {data===null ? <Spin style={{position:"absolute",left:"49%",top:"49%"}} size="large" /> :
                <>
                <img 
                    onClick={()=>history.push("/foods")}
                    src={sliderBackBtn} 
                    className="category-back-btn" 
                    alt="back button" 
                />
                <div className="food-first-row">
                    <div>{data && parseInt(data.price).toLocaleString()}</div>
                    <div>{data && data.name.en}</div>
                </div>
                <div className="food-second-row">
                    <div>
                        <span>{data && data.description.en}</span>
                    </div>
                </div>
                <div className="food-third-row">
                    <div>
                        <img src={data.icon} alt="food" />
                    </div>
                    <div>
                        <Radio.Group onChange={(e)=>data.size=e.target.value}>
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
                </>
                }
            </div>
    )
}
export default Food;