import React from 'react';
import "./Category.css";
import { useHistory } from 'react-router';
import Slider from "react-slick";
import sliderImage from "../../assets/images/Smash-Freshers-Header-Banner copy.png";
import sliderBackBtn from "../../assets/images/63-631354_drop-down-menu-down-arrow-html-hd-png copy 2.png";
import pizzaImage from "../../assets/images/istockphoto-1083487948-612x612 copy 12.png";
import burgerImage from "../../assets/images/Burgers_Icon-min copy 2.png";
import sushiImage from "../../assets/images/image copy 5.png";
import sandwichImage from "../../assets/images/sandwich-hamon-black-background-salad-platter-close-up-food-photo-191914909 copy 7.png";


const Category=()=>{
    const history=useHistory();

    const data=[
        {name:"بیتزا",src:pizzaImage},
        {name:"برغر",src:burgerImage},
        {name:"مقبلات",src:sushiImage},
        {name:"سندویش",src:sandwichImage},
        {name:"بیتزا",src:pizzaImage},
        {name:"برغر",src:burgerImage},
        {name:"مقبلات",src:sushiImage},
        {name:"سندویش",src:sandwichImage},
        {name:"بیتزا",src:pizzaImage},
        {name:"برغر",src:burgerImage},
        {name:"مقبلات",src:sushiImage},
        {name:"سندویش",src:sandwichImage},
        {name:"بیتزا",src:pizzaImage},
        {name:"برغر",src:burgerImage},
        {name:"مقبلات",src:sushiImage},
        {name:"سندویش",src:sandwichImage}
    ]

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

            </div>
        </div>
    )
}
export default Category;