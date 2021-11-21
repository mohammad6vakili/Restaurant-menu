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
    const [inSize , setInSize]=useState(null);
    const [hello , setHello]=useState(true);

    const getFood=async()=>{
        try{
            const response = await axios.post("https://admin.btob-restaurant.com/api/v3/food",{
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
        setInSize(null);
      }else{
        dispatch(setCart(true));
        // dispatch(setCartData(
        //   cartData && cartData.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
        // ))
      }
    }

    const changeRadio=(e)=>{
        data.extras.map((ex)=>{
            if(e.target.value===ex.id){
                setNewPrice(data.price+ex.price);
            }
        })
        setInSize(e.target.value);
    }

    useEffect(()=>{
        if(data){
            setNewPrice(data.price);
        }
    },[data])

    useEffect(()=>{
        if(foods===null){
            history.push("/foods");
        }else{
            getFood();
        }
        window.scrollTo(0, 0);
    },[])


    const addToCart=()=>{
        let cpData=data;
        cpData.price=newPrice;
        cpData.size=inSize;
        let alreadyExists=false;
        if(inSize!==null){
            cartData.map((x) => {
                if (x.size === inSize) {
                  alreadyExists = true;
                  x.count++;
                }
            });
        }else{
            cartData.map((x) => {
                if (x.id === cpData.id) {
                  alreadyExists = true;
                  x.count++;
                }
            });
        }
        if(!cpData.size){
            cpData.size=null;
        }
        if(cartData.length===0){
            cpData.count=1
            cartData.push(cpData);
            cartHandler();
            history.push("/foods");
            console.log("cartData.length===0");
        }else if(cartData.length>0){
            if(!alreadyExists){
                console.log("alreadyExist===false");
                cpData.count=1
                history.push("foods");
                cartData.push(cpData);
                cartHandler();
            }else{
                cartHandler();
                console.log("alreadyExist===true");
            }
        }
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
                                    <Radio value={ex.id}>
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