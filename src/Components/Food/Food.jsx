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
    const lang=useSelector(state=>state.Reducer.lang);
    const [data , setData]=useState(null);
    const [newPrice , setNewPrice]=useState(null);
    const [hello , setHello]=useState(true);
    const [cpData , setCpData]=useState(null);
    const [already , setAlready]=useState(false);
    const [msg , setMsg]=useState("");

    const getFood=async()=>{
        try{
            const response = await axios.post("https://admin.btob-restaurant.com/api/v3/food",{
                food:foods
            });
            setData(response.data);
            setCpData(response.data);
        }catch(err){
            console.log(err);
            message.error("Failed");
        }
    }

    const backToFoods=()=>{
        setData(null);
        setCpData(null);
        history.push("/foods");
    }

    const cartHandler=()=>{
        dispatch(setCartData(
            cartData.filter((v,i,a)=>a.findIndex(t=>(t.id===v.id && t.size === v.size))===i)
        ))
        // cartData.filter((v,i,a)=>a.findIndex(t=>(t.id===v.id && t.size === v.size))===i)[0].count++;
      if(cart===true){
        dispatch(setCart(false));
        checker();
      }else{
        dispatch(setCart(true));
        checker();
      }
    }

    const changeRadio=(e)=>{
        setHello(!hello);
        data.extras.map((ex)=>{
            if(e.target.value===ex.id){
                setNewPrice(data.price+ex.price);
            }
        })
        setCpData({...cpData , size:e.target.value});
        checker();
    }

    const checker=()=>{
        if(cpData && cpData.hasOwnProperty("size")===false){
            cpData.size=null;
        }
        if(cpData){
            cartData.map((x)=>{
                if(x.size===cpData.size){
                    setAlready(true);
                    console.log("x.size===cpData.size");
                    setMsg("x.size===cpData.size");
                }
                if(x.id===cpData.id){
                    setAlready(true);
                    console.log("x.id===data.id");
                    setMsg("x.id===data.id");
                }
                if(x.id!==cpData.id){
                    setAlready(false);
                    console.log("x.id!==data.id");
                    setMsg("x.id!==data.id");
                }
                if(x.size!==cpData.size){
                    setAlready(false);
                    console.log("x.size!==cpData.size");
                    setMsg("x.size!==cpData.size");
                }
            })
        }
    }

    const addToCart=()=>{
        checker();
        cpData.price=newPrice;
        checker();
        if(cartData.length>0){
            if(already===true){
                cartData.map((x)=>{
                    if(x.id===cpData.id && x.size===cpData.size){
                        x.count++;
                    }
                })
                cartHandler();
                console.log("already");
                checker();
            }else{
                console.log("!already");
                cartData.push({...cpData,count:1});
                cartHandler();
                checker();
            }
        }else{
            cartData.push({...cpData,count:1});
            cartHandler();
            console.log("first time");
            checker();
            console.log("cartData=0");
        }
    }

    useEffect(()=>{
        if(data){
            setNewPrice(data.price);
            checker();
        }
    },[data])

    useEffect(()=>{
        if(data){
            checker();
        }
    },[hello])

    useEffect(()=>{
        if(foods===null){
            history.push("/foods");
        }else{
            getFood();
        }
        window.scrollTo(0, 0);
        checker();
    },[])
    
    return(
            <div className="food">
                {data===null ? <Spin style={{position:"absolute",left:"49%",top:"49%"}} size="large" /> :
                <>
                <img 
                    onClick={backToFoods}
                    src={sliderBackBtn}
                    className="category-back-btn" 
                    alt="back button" 
                />
                {data &&
                    <div className="food-first-row">
                        <div>{parseInt(data.price).toLocaleString()}</div>
                        <div>
                            {lang==="ar" && data.name.ar}
                            {lang==="en" && data.name.en}
                            {lang==="ku" && data.name.fa}
                        </div>
                    </div>
                }
                <div className="food-second-row">
                    {data &&
                        <div>
                            {lang==="ar" && <span>{data.description.ar}</span>}
                            {lang==="en" && <span>{data.description.en}</span>}
                            {lang==="ku" && <span>{data.description.fa}</span>}
                        </div>
                    }
                </div>
                <div className="food-third-row">
                    <div>
                        <img src={data.icon} alt="food" />
                    </div>
                    <div>
                        <Radio.Group onChange={(e)=>changeRadio(e)}>
                            {data.extras && data.extras.length!==0 &&
                                data.extras.map((ex)=>(
                                    <Radio onClick={checker} value={ex.id}>
                                        {lang==="ar" && ex.name.ar}
                                        {lang==="en" && ex.name.en}
                                        {lang==="ku" && ex.name.fa}
                                    </Radio>
                                ))
                            }
                        </Radio.Group>
                    </div>
                </div>
                <div className="food-fourth-row">
                    <Button onClick={addToCart}>
                            {lang==="ar" && "اًضف اٍلی الطلب"}
                            {lang==="en" && "Add to cart"}
                            {lang==="ku" && "افزودن به سبد خرید"}
                    </Button>
                </div>
                </>
                }
            </div>
    )
}
export default Food;