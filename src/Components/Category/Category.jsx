import React, { useEffect } from 'react';
import "./Category.css";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setFoodsData } from '../../Store/Action';
import Slider from "react-slick";
import sliderImage from "../../assets/images/Smash-Freshers-Header-Banner copy.png";
import sliderBackBtn from "../../assets/images/63-631354_drop-down-menu-down-arrow-html-hd-png copy 2.png";
import pizzaImage from "../../assets/images/istockphoto-1083487948-612x612 copy 12.png";
import burgerImage from "../../assets/images/Burgers_Icon-min copy 2.png";
import sushiImage from "../../assets/images/image copy 5.png";
import sandwichImage from "../../assets/images/sandwich-hamon-black-background-salad-platter-close-up-food-photo-191914909 copy 7.png";


const Category=()=>{
    const dispatch=useDispatch();
    const history=useHistory();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    const data=[
        {
            id:1,
            name:"بیتزا",
            src:pizzaImage,
            foods:[
                {id:11,src:pizzaImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:12,src:pizzaImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:13,src:pizzaImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:14,src:pizzaImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:15,src:pizzaImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:2,
            name:"برغر",
            src:burgerImage,
            foods:[
                {id:21,src:burgerImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:22,src:burgerImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:23,src:burgerImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:24,src:burgerImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:25,src:burgerImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:3,
            name:"مقبلات",
            src:sushiImage,
            foods:[
                {id:31,src:sushiImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:32,src:sushiImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:33,src:sushiImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:34,src:sushiImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:35,src:sushiImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:4,
            name:"سندویش",
            src:sandwichImage,
            foods:[
                {id:41,src:sandwichImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:42,src:sandwichImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:43,src:sandwichImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:44,src:sandwichImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:45,src:sandwichImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:5,
            name:"بیتزا",
            src:pizzaImage,
            foods:[
                {id:51,src:pizzaImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:52,src:pizzaImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:53,src:pizzaImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:54,src:pizzaImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:55,src:pizzaImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {  
            id:6, 
            name:"برغر",
            src:burgerImage,
            foods:[
                {id:61,src:burgerImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:62,src:burgerImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:63,src:burgerImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:64,src:burgerImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:65,src:burgerImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:7,
            name:"مقبلات",
            src:sushiImage,
            foods:[
                {id:71,src:sushiImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:72,src:sushiImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:73,src:sushiImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:74,src:sushiImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:75,src:sushiImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:8,
            name:"سندویش",
            src:sandwichImage,
            foods:[
                {id:81,src:sandwichImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:82,src:sandwichImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:83,src:sandwichImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:84,src:sandwichImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:85,src:sandwichImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:9,
            name:"بیتزا",
            src:pizzaImage,
            foods:[
                {id:91,src:pizzaImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:92,src:pizzaImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:93,src:pizzaImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:94,src:pizzaImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:95,src:pizzaImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:10,
            name:"برغر",
            src:burgerImage,
            foods:[
                {id:101,src:burgerImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:102,src:burgerImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:103,src:burgerImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:104,src:burgerImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:105,src:burgerImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:11,
            name:"مقبلات",
            src:sushiImage,
            foods:[
                {id:111,src:sushiImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:112,src:sushiImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:113,src:sushiImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:114,src:sushiImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:115,src:sushiImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:12,
            name:"سندویش",
            src:sandwichImage,
            foods:[
                {id:121,src:sandwichImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:122,src:sandwichImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:123,src:sandwichImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:124,src:sandwichImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:125,src:sandwichImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:13,
            name:"بیتزا",
            src:pizzaImage,
            foods:[
                {id:131,src:pizzaImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:132,src:pizzaImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:133,src:pizzaImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:134,src:pizzaImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:135,src:pizzaImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:14,
            name:"برغر",
            src:burgerImage,
            foods:[
                {id:141,src:burgerImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:142,src:burgerImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:143,src:burgerImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:144,src:burgerImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:145,src:burgerImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:15,
            name:"مقبلات",
            src:sushiImage,
            foods:[
                {id:151,src:sushiImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:152,src:sushiImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:153,src:sushiImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:154,src:sushiImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:155,src:sushiImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            id:16,
            name:"سندویش",
            src:sandwichImage,
            foods:[
                {id:161,src:sandwichImage,price:"11000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:162,src:sandwichImage,price:"14000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:163,src:sandwichImage,price:"22000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:164,src:sandwichImage,price:"10500",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {id:165,src:sandwichImage,price:"37000",count:0,fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        }
    ]

    const goToFood=(d)=>{
        dispatch(setFoodsData(d));
        history.push("/foods")
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
                    <img src={sliderImage} alt="slider" />
                    <img src={sliderImage} alt="slider" />
                    <img src={sliderImage} alt="slider" />
                </Slider>
                <img 
                    onClick={()=>history.push("/")}
                    className="category-back-btn" 
                    src={sliderBackBtn} 
                    alt="back"
                />
            </div>
            <div className="category-items">
                {data.map((d)=>(
                    <div onClick={()=>goToFood(d)} className="category-item">
                        <img src={d.src} alt="food" />
                        <div>{d.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Category;