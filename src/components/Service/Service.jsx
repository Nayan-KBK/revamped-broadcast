import React from 'react'
import Slider from 'react-slick'
import homeSlider1 from "../../assets/homeSlider1.jpeg"
import homeSlider2 from "../../assets/homeSlider2.jpeg"
import homeSlider3 from "../../assets/homeSlider3.jpeg"
import { FaArrowLeft, FaArrowRight, FaNetworkWired, FaRegCircle } from 'react-icons/fa'
import { HiMiniUserGroup } from 'react-icons/hi2'


import drone from '../../assets/drone.png'
import greenMatte from '../../assets/greenMatte.png'
import videoEditing from '../../assets/videoEditing.png'

import brandPromotion from '../../assets/brandPromotion.png'
import insta from '../../assets/insta.png'
import podcast from '../../assets/podcast.png'



import { NavLink } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'


function Service() {




    const services = [
        {
            title: "Video Service Including Drone",
            description:
                "Capture stunning aerial perspectives with our professional video services, including high-quality drone footage. Elevate your visuals with breathtaking cinematic shots from above.",
            image: drone,
            alt: "Drone Image",
        },
        {
            image: brandPromotion,
            title: 'Brand Promotion',
            description: 'Boost your brand’s reach with our expert promotion services, featuring engaging visuals and strategic marketing. We create impactful content to enhance visibility and audience engagement! ',
        },
        {
            image: podcast,
            title: 'PodCasts',
            description: 'Enhance your voice with our professional podcast services, including high-quality editing, crisp audio, and seamless storytelling. Engage your audience with a polished and immersive experience!',
        },
        {
            image: insta,
            title: 'Content Creation',
            description: `We craft compelling content that captivates and engages your audience, from videos to graphics and copywriting. Elevate your brand with creative storytelling and high-quality visuals!`,
        },
        {
            image: greenMatte,
            title: 'Green Matte Studio',
            description: `Green Matte Studio is a creative hub specializing in sleek, modern design with a touch of natural aesthetics. It blends innovation and minimalism to craft visually stunning experiences. `,
        },
        {
            image: videoEditing,
            title: ' Video Editing',
            description: 'We provide professional video editing services with seamless transitions, cinematic effects, and color grading. Bring your vision to life with a polished, engaging final cut! ',
        },

    ];







    const images = [
        homeSlider1,
        homeSlider2,
        homeSlider3,


    ];


    const NextArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-3 rounded-full cursor-pointer text-white hover:bg-black z-2"
            onClick={onClick}
        >
            <FaArrowRight className="sm:size-2 md:size-8" />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-3 rounded-full cursor-pointer text-white hover:bg-black z-2"
            onClick={onClick}
        >
            <FaArrowLeft className="sm:size-2 md:size-8" />
        </div>
    );


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: false,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        appendDots: (dots) => (
            <div className="absolute top-4 right-6 flex space-x-2 z-20">
                {dots}
            </div>
        ),



    };

    return (
        <>
            <Slider {...settings} className="absolute top-0 left-0 w-full h-[80vh] md:h-screen">
                {images.map((img, index) => (
                    <div key={index} className="w-full h-[80vh] md:h-screen    object-contain">
                        <img src={img} alt={`slide-${index}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </Slider>
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-[80vh] md:h-screen bg-black opacity-70"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-16 sm:mt-0 -mt-27">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ">
                    Experience  <span className="text-blue-500 sm:inline block">Hassle Free</span> Service Today
                </h2>
            </div>

            <div className="w-full sm:w-[70vw] mx-auto mt-20">


                {/* Header Section */}
                <div className="flex md:flex-row flex-col justify-between items-center w-full flex-wrap px-[10vw]" >
                    {/* Title */}
                    <div className="w-1/2 sm:w-2/5">
                        <h2 className="text-4xl sm:text-5xl font-bold">Service</h2>
                    </div>

                    {/* Description */}
                    <div className="sm:w-3/5 w-full sm:mt-0 mt-10">
                        <p className="text-lg sm:text-[22px] font-medium leading-[28px]">
                            From helping creators develop and monetize their channels, finding the top talent across India to delivering end to end video advertising solutions, Infinitum does it all!
                        </p>
                    </div>
                </div>

                <div className="container mx-auto w-full bg-custom-gradient text-white  py-20 mt-15 mb-5">

                    {/* Statistics Section */}
                    <div className="w-full flex flex-col items-center mt-16">
                        {/* Section Title */}
                        <div className="mb-6 text-center">
                            <p className="text-3xl md:text-3xl font-bold flex items-center">
                                <FaRegCircle className="mr-4" />
                                Statistics & Numbers
                            </p>
                        </div>

                        {/* Stats Row */}
                        <div className="w-full flex justify-around flex-wrap gap-8 px-4">
                            {/* Projects */}
                            <div className="flex flex-col items-center text-center">
                                <FaNetworkWired size={40} className="text-blue-300 mb-2" />
                                <p className="text-[50px] sm:text-[80px] font-semibold">160+</p>
                                <p className="text-[20px] sm:text-[30px]">Countries</p>
                            </div>

                            {/* Brands */}
                            <div className="flex flex-col items-center text-center">
                                <HiMiniUserGroup size={40} className="text-blue-300 mb-2" />
                                <p className="text-[50px] sm:text-[80px] font-semibold">100+</p>
                                <p className="text-[20px] sm:text-[30px]">Languages</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className="bg-gray-300 pb-15 w-full" >


                <div className=" px-[5vw] sm:px-[15vw] ">

                    <h1 className="text-5xl font-black text-left mb-8 py-5 sm:py-5">Discover</h1>

                    {/* <div className="container mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`mb-10 px-6 py-12 flex flex-col sm:flex-row items-center gap-8 ${index % 2 === 0 ? 'bg-white' : 'bg-black '}`}
                            >
                                <div
                                    className={`flex flex-col sm:w-1/2 text-center sm:text-left ${index % 2 === 0 ? 'text-black' : 'text-white'
                                        }`}
                                >
                                    <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                                    <p className="text-lg text-left">
                                        {service.description}
                                    </p>

                                    <NavLink to='/contact-us'>
                                        <button type="button" className="border w-fit border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition flex mt-4 cursor-pointer">
                                            Get in Touch
                                            <IoIosArrowRoundForward className='text-2xl mx-2' />
                                        </button>
                                    </NavLink>
                                </div>

                                <img
                                    src={service.image}
                                    alt={service.alt}
                                    className="w-full sm:w-[40%] h-auto object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div> */}






                    <div className="container mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`mb-10 px-6 py-12 flex flex-col sm:flex-row items-center gap-8 
                ${index % 2 === 0 ? 'bg-white text-black' : 'bg-black text-white'}
                ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`
                                } // Alternates the order for odd indexes
                            >
                                <div className="flex flex-col sm:w-1/2 text-center sm:text-left">
                                    <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                                    <p className="text-lg">{service.description}</p>
                                    <NavLink to='/contact-us' className="text-blue-400 mt-2">
                                    
                                        <button type="button" className="border w-fit border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition flex mt-4 cursor-pointer decoration-0 no-underline">
                                            Get in Touch
                                            <IoIosArrowRoundForward className='text-2xl mx-2' />
                                        </button>
                                    </NavLink>
                                </div>

                                <img
                                    src={service.image}
                                    alt={service.alt}
                                    className="w-full sm:w-[40%] h-auto object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>





                </div>
            </div>
        </>
    )
}

export default Service