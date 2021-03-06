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
    const lang=useSelector(state=>state.Reducer.lang);
    const catName=useSelector(state=>state.Reducer.catName);
    const [foodsData , setFoodsData]=useState(null);
    
    const getFoods=async()=>{
        try{
            const response=await axios.post("https://admin.btob-restaurant.com/api/v3/foods",{
                restaurant:res,
                category:cat
            });
            setFoodsData(response.data);
        }catch(err){
            console.log(err);
            history.push("/category");
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
            {catName &&
                <div style={{fontSize:"26px",color:"white",marginTop:"20px"}}>{catName}</div>
            }
            <div className="foods-items">
                {foodsData===null ? <Spin style={{position:"absolute",left:"49%",top:"49%"}} size="large" />
                :
                    foodsData.map((data)=>(
                        data.name &&
                            <div className="foods-item" onClick={()=>goToFood(data)}>
                                <div className="foods-item-img">
                                    {data.icon && <img src={data.icon} alt="food"/>}
                                </div>
                                <div className="foods-item-info">
                                    <div>
                                    {lang==="ar" &&<div>{data.name.ar}</div>}
                                    {lang==="en" &&<div>{data.name.en}</div>}
                                    {lang==="ku" &&<div>{data.name.fa}</div>}
                                        {data.price && <div>{parseInt(data.price).toLocaleString()}</div>}
                                    </div>
                                    <div>
                                        {lang==="ar" &&<span>{data.description.ar}</span>}
                                        {lang==="en" &&<span>{data.description.en}</span>}
                                        {lang==="ku" &&<span>{data.description.fa}</span>}
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