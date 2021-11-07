import React from 'react';
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

    const data=[
        {
            name:"بیتزا",
            src:pizzaImage,
            foods:[
                {src:pizzaImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {   
            name:"برغر",
            src:burgerImage,
            foods:[
                {src:burgerImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            name:"مقبلات",
            src:sushiImage,
            foods:[
                {src:sushiImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            name:"سندویش",
            src:sandwichImage,
            foods:[
                {src:sandwichImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            name:"بیتزا",
            src:pizzaImage,
            foods:[
                {src:pizzaImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {   
            name:"برغر",
            src:burgerImage,
            foods:[
                {src:burgerImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            name:"مقبلات",
            src:sushiImage,
            foods:[
                {src:sushiImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            name:"سندویش",
            src:sandwichImage,
            foods:[
                {src:sandwichImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            name:"بیتزا",
            src:pizzaImage,
            foods:[
                {src:pizzaImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {   
            name:"برغر",
            src:burgerImage,
            foods:[
                {src:burgerImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            name:"مقبلات",
            src:sushiImage,
            foods:[
                {src:sushiImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            name:"سندویش",
            src:sandwichImage,
            foods:[
                {src:sandwichImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            name:"بیتزا",
            src:pizzaImage,
            foods:[
                {src:pizzaImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:pizzaImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {   
            name:"برغر",
            src:burgerImage,
            foods:[
                {src:burgerImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:burgerImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            name:"مقبلات",
            src:sushiImage,
            foods:[
                {src:sushiImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sushiImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
            ]
        },
        {
            name:"سندویش",
            src:sandwichImage,
            foods:[
                {src:sandwichImage,price:"11000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"14000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"22000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"10500",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"},
                {src:sandwichImage,price:"37000",fName:"بیتزا ببیرونی",desc:"جنبت موزاریلا-ببیرونی-زیتون-فلیفلت خضراء"}
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