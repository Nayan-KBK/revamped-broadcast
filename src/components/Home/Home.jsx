import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeSlider1 from "../../assets/homeSlider1.jpeg"
import homeSlider2 from "../../assets/homeSlider2.jpeg"
import homeSlider3 from "../../assets/homeSlider3.jpeg"
import homeTalent from "../../assets/homeTalent.jpg"
import homeContent from '../../assets/homeContent.jpg'
import homeProduction from '../../assets/homeProduction.jpg'

import drone from '../../assets/drone.png'
import brandPromotion from '../../assets/brandPromotion.png'
import greenMatte from '../../assets/greenMatte.png'
import insta from '../../assets/insta.png'
import podcast from '../../assets/podcast.png'
import videoEditing from '../../assets/videoEditing.png'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SwitchContect from "./SwitchContect";
import GetInTouch from "./GetInTouch";
import CTA from "../Global/CTA";

const Home = () => {



    const contentData = [
        {
            image: homeContent,
            heading: 'CONTENT',
            description: 'Covering the entire spectrum, we’ve built content IP’s in everything from Kids rhymes to cooking shows, to thrillers and Rom-Com.',
        },
        {
            image: homeTalent,
            heading: 'TALENT',
            description: 'You’ve seen someone talented on YouTube? It’s likely that we manage them!',
        },
        {
            image: homeProduction,
            heading: 'PRODUCTION',
            description: 'From TV shows to feature films to web series, we’ve got all the feathers you could think of!',
        },
    ];





    const serviceData1 = [
        {
            image: drone,
            heading: 'Video Service Includin Drone',
            description: 'Capture stunning aerial perspectives with our professional video services, including high-quality drone footage. Elevate your visuals with breathtaking cinematic shots from above',
        },
        {
            image: greenMatte,
            heading: 'Green Matte Studio',
            description: `Green Matte Studio is a creative hub specializing in sleek, modern design with a touch of natural aesthetics. It blends innovation and minimalism to craft visually stunning experiences. `,
        },
        {
            image: videoEditing,
            heading: ' Video Editing',
            description: 'We provide professional video editing services with seamless transitions, cinematic effects, and color grading. Bring your vision to life with a polished, engaging final cut! ',
        },






        // {
        //     image: brandPromotion,
        //     heading: 'Brand Promotion',
        //     description: 'KBK Broadcasting offers unparalleled Media Services, tailored for your needs. From strategic planning to seamless execution, we elevate your content across platforms. Our comprehensive solutions encompass production, distribution, and analytics, ensuring your message reaches the right audience effectively. Trust us for a transformative media experience.',
        // },
        // {
        //     image: podcast,
        //     heading: 'PodCasts',
        //     description: 'Proficient in crafting compelling news articles and scripts that captivate audiences. Experienced in research, interviewing, and adapting to various tones and styles. Committed to delivering engaging and accurate content that resonates with readers and viewers alike.',
        // },
        // {
        //     image: insta,
        //     heading: 'Content Creation',
        //     description: `KBK Broadcasting's Shooting Team excels in capturing riveting visuals and compelling footage. Our skilled professionals blend creativity and technical expertise to produce high-quality content. From live events to scripted productions, we bring stories to life with precision and innovation. Join us for a visual journey that exceeds expectations.`,
        // },









        // {
        //     image: bpv,
        //     heading: 'Business Promotional videos',
        //     description: `KBK Broadcasting's Shooting Team excels in capturing riveting visuals and compelling footage. Our skilled professionals blend creativity and technical expertise to produce high-quality content. From live events to scripted productions, we bring stories to life with precision and innovation. Join us for a visual journey that exceeds expectations.`,
        // },


    ];


    const serviceData2 = [
        {
            image: brandPromotion,
            heading: 'Brand Promotion',
            description: 'Boost your brand’s reach with our expert promotion services, featuring engaging visuals and strategic marketing. We create impactful content to enhance visibility and audience engagement! ',
        },
        {
            image: podcast,
            heading: 'PodCasts',
            description: 'Enhance your voice with our professional podcast services, including high-quality editing, crisp audio, and seamless storytelling. Engage your audience with a polished and immersive experience!',
        },
        {
            image: insta,
            heading: 'Content Creation',
            description: `We craft compelling content that captivates and engages your audience, from videos to graphics and copywriting. Elevate your brand with creative storytelling and high-quality visuals!`,
        }
    ]





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
            <div className="relative w-full h-[80vh] md:h-screen">
                {/* Background Slider */}
                <Slider {...settings} className="absolute top-0 left-0 w-full  h-[80vh] md:h-screen">
                    {images.map((img, index) => (
                        <div key={index} className="w-full  h-[80vh] md:h-screen object-contain">
                            <img src={img} alt={`slide-${index}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </Slider>

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full  h-[80vh] md:h-screen bg-black opacity-70"></div>


                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 sm:mt-0 -mt-27">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        A Global <span className="text-blue-500">Content</span> Network
                    </h2>
                </div>

            </div>

            <SwitchContect />



            <div className="bg-gray-200 pb-15" >

                <div className=" flex flex-col sm:flex-row justify-between items-center w-full gap-8 px-[5vw] sm:px-[15vw]">
                    {/* Title */}
                    <div className="w-full sm:w-1/2 sm:py-20 pt-10">
                        <h2 className="text-4xl sm:text-5xl font-bold">What we Do</h2>
                    </div>

                    {/* Description */}
                    <div className="w-full sm:w-1/2 sm:py-20 py-0">
                        <p className="text-lg sm:text-[22px] font-medium leading-[28px]">
                            We are storytellers. We love taking a story and bringing it to life. Infinitum is a full-service multi-media production company, handling projects from script to screen to promotions to conversions, and producing in all High-Definition formats.
                        </p>
                    </div>
                </div>

            </div>






            <div className="bg-gray-200 sm:pb-20  pb-20">
                <div className=" w-full sm:w-[70vw] flex flex-wrap justify-around items-start  gap-8 p-0 sm:px-5 mx-auto ">
                    {contentData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col w-full sm:w-[20vw]  h-full mt-[20px] mb-5"
                            // style={{ marginTop: `${index * 40}px` }}
                            style={{ marginTop: window.innerWidth >= 640 ? `${index * 40}px` : '5px' }}

                        >
                            <img src={item.image} alt={`Image ${index + 1}`} className="mb-4 sm:w-[25vw] w-[100vw]  object-cover" />
                            {/* sm:h-[30vw] h-[40vh] */}
                            <h2 className="text-3xl font-semibold mb-2 text-center sm:text-left">{item.heading}</h2>
                            <p className="text-left text-lg sm:p-0 px-5 pt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* CTA */}
            <CTA />



            {/*  OUr Services*/}

            <div className="bg-gray-100 py-10 ">


                {/* <p className="text-5xl text-dark text-center font-medium ">OUR SERVICES</p> */}
                <h2 className="sm:text-5xl text-4xl text-center font-bold text-gray-800 ">OUR SERVICES</h2>




                <div className="service service-1">
                    {serviceData1.map((item, index) => (
                        <div key={index} className="service-card1 service-card" style={{ "--index": index }}>
                            <img src={item.image} alt={`Image ${index + 1}`} className="service-image" />
                            <h2 className="service-heading">{item.heading}</h2>
                            <p className="service-description">{item.description}</p>
                        </div>
                    ))}
                </div>



                <div className=" service service-2">
                    {serviceData2.map((item, index) => (
                        <div key={index} className="service-card2 service-card" style={{ "--index": index }}>
                            <img src={item.image} alt={`Image ${index + 1}`} className="service-image" />
                            <h2 className="service-heading">{item.heading}</h2>
                            <p className="service-description">{item.description}</p>
                        </div>
                    ))}
                </div>





            </div>




            <GetInTouch />

        </>

    );
};

export default Home;
