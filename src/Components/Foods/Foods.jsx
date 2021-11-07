import React from 'react';
import "./Foods.css";
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import sliderBackBtn from "../../assets/images/63-631354_drop-down-menu-down-arrow-html-hd-png copy 2.png";
import Logo from "../../assets/images/logo.png";


const Foods=()=>{
    const history=useHistory();
    const foodsData=useSelector(state=>state.Reducer.foodsData);
    return(
        <div className="foods">
            <img 
                onClick={()=>history.push("/category")}
                src={sliderBackBtn} 
                className="category-back-btn" 
                alt="back button" 
            />
            <img 
                className="foods-logo"
                src={Logo} 
                alt="logo" 
            />
            {foodsData &&
                <div className="foods-title">
                    {foodsData.name}
                </div>
            }
        </div>
    )
}
export default Foods;