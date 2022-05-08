import React, { Component } from "react";
import Slider from "react-slick";
import images from "./images";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
		arrows:true,
      dots: false,
      infinite: true,
	  className:"center",
      speed: 500,
	  centerMode:true,
	  centerPadding:1,
	  autoplay:true,
	  infinite:true,
      slidesToShow: 3,
      slidesToScroll: 3
    };
	
    const settingsMd = {
		arrows:true,
      dots: false,
      infinite: true,
	  className:"center",
      speed: 500,
	  centerMode:true,
	  centerPadding:1,
	  autoplay:true,
	  infinite:true,
      slidesToShow: 1,
      slidesToScroll: 2
    };
    return (
		<hero>
			<div className="hidden py-2 lg:block">
        <div className="flex items-center justify-center">

        </div>
    	
			<div className="w-full px-12  py-5">
        <Slider {...settings}>
          <div className="w-full h-full px-2 h-auto">
            <img src={images.f6} alt="" className="h-72 w-full rounded-md" />
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.two} alt="" className="w-full rounded-md" />
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.three} alt="" className="w-full rounded-md"/>
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.four} alt="" className="w-full rounded-md"/>
          </div>
          <div className="w-full h-72 px-2">
		  <img src={images.one} alt="" className="h-full w-full rounded-md" />
          </div>
          <div className="w-full h-72 px-2">
		  <img src={images.f4} alt="" className="h-full w-full rounded-md"/>
          </div>
          <div className="w-full h-72 px-2">
		  <img src={images.f3} alt="" className="h-full w-full rounded-md"/>
          </div>
          <div className="w-full h-72 px-2">
		  <img src={images.f2} alt="" className="h-full w-full rounded-md"/>
          </div>
          <div className="w-full h-72 px-2">
		  <img src={images.f1} alt="" className="h-full w-full rounded-md"/>
          </div>
          <div className="w-full h-72 px-2">
		  <img src={images.f6} alt="" className="h-full w-full rounded-md"/>
          </div>
          <div className="w-full h-72 px-2">
		  <img src={images.f3} alt="" className="w-full h-full rounded-md"/>
          </div>
        </Slider>
      </div>
		</div>
		
		<div className="sm:hidden md:block lg:hidden">
			
			<div className="w-full px-12  py-8">
        <Slider {...settingsMd}>
          <div className="w-full px-2 h-auto">
            <img src={images.one} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.two} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.three} alt="" className="w-full h-auto"/>
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.four} alt="" className="w-full h-auto"/>
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.three} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.two} alt="" className="w-full h-auto"/>
          </div>
        </Slider>
      </div>
		</div>
		</hero>
    );
  }
}
