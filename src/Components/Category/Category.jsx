import React, { useEffect , useState} from 'react';
import "./Category.css";
import { useDispatch , useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import { setFoodsData,setCat,setCatName } from '../../Store/Action';
import Slider from "react-slick";
import sliderImage from "../../assets/images/Smash-Freshers-Header-Banner copy.png";
import sliderBackBtn from "../../assets/images/63-631354_drop-down-menu-down-arrow-html-hd-png copy 2.png";
import pizzaImage from "../../assets/images/istockphoto-1083487948-612x612 copy 12.png";
import burgerImage from "../../assets/images/Burgers_Icon-min copy 2.png";
import sushiImage from "../../assets/images/image copy 5.png";
import sandwichImage from "../../assets/images/sandwich-hamon-black-background-salad-platter-close-up-food-photo-191914909 copy 7.png";
import axios from "axios";
import { message, Spin } from 'antd';


const Category=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const [slider , setSlider]=useState(null);
    const [catData , setCatData]=useState(null);
    const res=useSelector(state=>state.Reducer.res);
    const lang=useSelector(state=>state.Reducer.lang);

    const getCat=async()=>{
        try{
            const response=await axios.post("https://admin.btob-restaurant.com/api/v3/categories",
                {
                    restaurant:res
                }
            );
            setCatData(response.data);
        }catch(err){
            console.log(err);
            message.error("Failed")
        }
    }

    const getSliders=async()=>{
        try{
            const response=await axios.post("https://admin.btob-restaurant.com/api/v3/sliders",{
                restaurant:res
            });
            setSlider(response.data);
        }catch(err){
            console.log(err);
            message.error("Failed");
        }
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        if(res===null){
            history.push("/");
        }else{
            getCat();
            getSliders();
        }
    },[])

    const goToFood=(data)=>{
        dispatch(setCat(data.id));
        if(lang==="en"){
            dispatch(setCatName(data.name.en));
        }else if(lang==="ar"){
            dispatch(setCatName(data.name.ar));
        }else if(lang==="ku"){
            dispatch(setCatName(data.name.fa));
        }
        history.push("/foods");
    }

    const goToFoodWithSlider=(data)=>{
        dispatch(setCat(data.category_id));
        history.push("/foods");
        if(lang==="en"){
            dispatch(setCatName(data.category.name.en));
        }else if(lang==="ar"){
            dispatch(setCatName(data.category.name.ar));
        }else if(lang==="ku"){
            dispatch(setCatName(data.category.name.fa));
        }
    }

    const bannerSettings = {
        dots: true,
        arrows:false,
        autoplay: true,
        rtl: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="category">
            <div className="slider-wrapper">
                <Slider {...bannerSettings}>
                {slider !==null ?
                    slider.map((data)=>(
                        <img onClick={()=>goToFoodWithSlider(data)} src={data.imageShow} key={data.id} alt="slider" />
                    ))
                :
                    <Spin size="large" />
                }
                </Slider>
                <img 
                    onClick={()=>history.push("/")}
                    className="category-back-btn" 
                    src={sliderBackBtn} 
                    alt="back"
                />
            </div>
            <div className="category-items">
                {catData ? 
                    catData.map((data)=>(
                        <div key={data.id} onClick={()=>goToFood(data)} className="category-item">
                            <img src={data.imageShow} alt="food" />
                            <div>
                                {lang==="ar" && data.name.ar}
                                {lang==="en" && data.name.en}
                                {lang==="ku" && data.name.fa}
                            </div>
                        </div>
                    ))
                :
                    <Spin size="large" />
                }
            </div>
        </div>
    )
}
export default Category;