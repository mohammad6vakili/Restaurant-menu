import React, { useEffect } from 'react';
import "./Food.css";
import sliderBackBtn from "../../assets/images/63-631354_drop-down-menu-down-arrow-html-hd-png copy 2.png";
import { useHistory } from 'react-router';
import {setCartData} from "../../Store/Action";
import { useSelector , useDispatch} from 'react-redux';
import { Radio , Button} from 'antd';
import foodImage from "../../assets/images/Layer 4.png";


const Food=()=>{
    
    const dispatch=useDispatch();
    const history=useHistory();
    const foodData=useSelector(state=>state.Reducer.foodData);
    const cartData=useSelector(state=>state.Reducer.cartData);

    
    useEffect(()=>{
        if(foodData===null){
            history.push("/category");
        }
        console.log(foodData);
    },[])

    const addToCart=()=>{
        foodData.count=foodData.count+1;
        cartData.push(foodData);
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
                <div></div>
            </div>
            <div className="food-third-row">
                <div>
                    <img src={foodImage} alt="food" />
                </div>
                <div>
                    <Radio.Group defaultValue={"md"}>
                        <Radio value="sm">صغیر</Radio>
                        <Radio value="md">متوسط</Radio>
                        <Radio value="lg">کبیر</Radio>
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