import React from 'react';
import "./Foods.css";
import { useHistory } from 'react-router';
import {setFoodData} from "../../Store/Action";
import { useSelector , useDispatch} from 'react-redux';
import sliderBackBtn from "../../assets/images/63-631354_drop-down-menu-down-arrow-html-hd-png copy 2.png";
import Logo from "../../assets/images/logo.png";


const Foods=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const foodsData=useSelector(state=>state.Reducer.foodsData);
    const goToFood=(data)=>{
        dispatch(setFoodData(data));
        history.push("/food");
    }
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
            <div className="foods-items">
                {foodsData && foodsData.foods.map((data)=>(
                    <div className="foods-item" onClick={()=>goToFood(data)}>
                        <img src={data.src} alt="food"/>
                        <div className="foods-item-info">
                            <div>
                                <div>{data.fName}</div>
                                <div>{parseInt(data.price).toLocaleString()}</div>
                            </div>
                            <div>
                                <span>{data.desc}</span>
                                <span>{data.desc}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Foods;