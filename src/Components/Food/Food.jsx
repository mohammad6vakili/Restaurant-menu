import React, { useEffect } from 'react';
import "./Food.css";
import sliderBackBtn from "../../assets/images/63-631354_drop-down-menu-down-arrow-html-hd-png copy 2.png";
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const Food=()=>{
    const history=useHistory();
    const foodData=useSelector(state=>state.Reducer.foodData);
    useEffect(()=>{
        if(foodData===null){
            history.push("/category");
        }
    },[])
    return(
        <div className="food">
            <img 
                onClick={()=>history.push("/category")}
                src={sliderBackBtn} 
                className="category-back-btn" 
                alt="back button" 
            />
        </div>
    )
}
export default Food;