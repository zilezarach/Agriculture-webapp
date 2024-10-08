'use client'
import React from "react";
import Image from "next/legacy/image";
import AutoPlay from "embla-carousel-autoplay"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'

const aboutUs = () => {

    const images = [
      {src: '/img1.jpg'},
      {src: '/img2.jpg'},
      {src: '/img3.jpg'},
      {src: '/img4.jpg'},
      {src: '/img5.jpg'},
      {src: '/img6.jpg'},
      {src: '/img8.jpg'}
    ];

    var settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint:480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          },
        },
      ],
    }
 
    return (
        <div id="about-us">
            <div className="relative py-16 bg-cover bg-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4 text-green-800 no-underline hover:underline">About us</h2>
                  <p className="text-xl mb-4 text-black font-bold">
                    The Agricultural Information Resource Center (AIRC) is a Semi-Autonomous Government Agency (SAGA) in the minstry of Agriculture Livestock and Fisheries, State Department of Agriculture.
                  </p>
                  <p className="text-lg mb-4 text-black underline decoration-4">The Primary role of AIRC is to: </p>
                  <p className="text-lg mb-3 text-black font-bold"> - Collect, repackage and disseminate agricultural Information on diffrent mass media platforms which include: Video, Radio, Publications and Web based channels to farmers and to other stake holders in the sector.</p>
                  <p className="text-lg mb-3 text-black font-bold"> - Carry out training programs that focus on communication skills, e-extension and other development workers.</p>
                  <h1 className="text-3xl font-bold mb-4 text-green-800 no-underline hover:underline">Vision</h1>
                  <p className="text-lg mb-4 text-black font-bold">To be the source of Agricultural Information and extension skills in Africa and beyond.</p>
                  <h1 className="text-3xl font-bold mb-4 text-green-800 no-underline hover:underline">Mission</h1>
                  <p className="text-lg mb-4 text-black font-bold">To Provide quality Agricultural Information to the farming community and other stakeholders using intergrated information platforms.</p>
                </div>
                <div className="md:w-1/4 slider-container">
                <Slider {...settings}>
                  {images.map((image, index)=>
                      <div key={index} className="slide">
                        <Image
                            src={image.src}
                            alt="about us"
                            width={350}
                            height={500}
                            layout="responsive"
                            className="w-full h-auto"
                        />
                      </div>
                    )}
                </Slider>
            </div>
            </div>
            </div>
        </div>
    )
}


export default aboutUs;