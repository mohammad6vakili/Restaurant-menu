import React,{useEffect, useState} from 'react';
import "./Foods.css";
import { useHistory } from 'react-router';
import {setFoods} from "../../Store/Action";
import { useSelector , useDispatch} from 'react-redux';
import sliderBackBtn from "../../assets/images/63-631354_drop-down-menu-down-arrow-html-hd-png copy 2.png";
import Logo from "../../assets/images/logo.png";
import axios from 'axios';
import { message, Spin } from 'antd';


const Foods=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const cat=useSelector(state=>state.Reducer.cat);
    const res=useSelector(state=>state.Reducer.res);
    const [foodsData , setFoodsData]=useState(null);
    
    const getFoods=async()=>{
        try{
            const response=await axios.post("http://admin.btob-restaurant.com/api/v3/foods",{
                restaurant:res,
                category:cat
            });
            setFoodsData(response.data);
        }catch(err){
            console.log(err);
            message.error("Failed");
        }
    }

    const goToFood=(data)=>{
        dispatch(setFoods(data.id));
        history.push("/food");
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        if(cat===null){
            history.push("/category");
        }else{
            getFoods();            
        }
    },[])

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
            {/* {foodsData &&
                <div className="foods-title">
                    ipp
                    {foodsData.name}
                </div>
            } */}
            <div className="foods-items">
                {foodsData===null ? <Spin style={{position:"absolute",left:"49%",top:"49%"}} size="large" />
                :
                    foodsData.map((data)=>(
                        data.name &&
                            <div className="foods-item" onClick={()=>goToFood(data)}>
                                {data.icon && <img src={data.icon} alt="food"/>}
                                <div className="foods-item-info">
                                    <div>
                                        {data.name.en &&<div>{data.name.en}</div>}
                                        {data.price && <div>{parseInt(data.price).toLocaleString()}</div>}
                                    </div>
                                    <div>
                                        {data.description.en && <span>{data.description.en}</span>}
                                    </div>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Foods;