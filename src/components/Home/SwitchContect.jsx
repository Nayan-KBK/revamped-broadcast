import React, { useState } from 'react';

import map from '../../assets/map.png'
// import { FaLanguage, FaMapMarkerAlt } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { HiLanguage, HiMiniUserGroup } from 'react-icons/hi2';
import { FaNetworkWired, FaRegCircle } from "react-icons/fa";
import { PiDevicesThin, PiEyeLight, PiVideo } from 'react-icons/pi';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { IoPeopleSharp } from 'react-icons/io5';


const Content = ({ selectedContent }) => {
    switch (selectedContent) {
        case 'about':
            return (
                <>

                    <div className="w-full sm:w-[70vw] mx-auto">


                        {/* Header Section */}
                        <div className="flex justify-between items-center w-full flex-wrap gap-8 px-[10vw]" >
                            {/* Title */}
                            <div className="w-full sm:w-2/5">
                                <h2 className="text-4xl sm:text-5xl font-bold">About us</h2>
                            </div>

                            {/* Description */}
                            <div className="w-full sm:w-3/5">
                                <p className="text-lg sm:text-[22px] font-medium leading-[28px]">
                                    Hybrid at heart, global in reach. Infinitum is a global content network built for impact beyond borders.
                                    We brew fresh content, talent, crafty ideas, and fresh coffee, every day!
                                </p>
                            </div>
                        </div>

                        <div className="container mx-auto w-full bg-custom-gradient text-white  py-20 mt-15 ">

                            {/* Statistics Section */}
                            <div className="w-full flex flex-col items-center mt-16">
                                {/* Section Title */}
                                <div className="mb-6 text-center">
                                    <p className="text-3xl md:text-3xl font-bold flex items-center">
                                        <FaRegCircle className="mr-4" />
                                        Our Presence
                                    </p>
                                </div>

                                {/* Stats Row */}
                                <div className="w-full flex justify-around flex-wrap gap-8 px-4">
                                    {/* Projects */}
                                    <img src={map} alt="Placeholder" className="w-full max-w-[500px] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[75%]" />
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            )




        case 'reach':
            return (
                <>




                    <div className="w-full sm:w-[70vw] mx-auto">


                        {/* Header Section */}
                        <div className="flex justify-between items-center w-full flex-wrap gap-8 px-[10vw]" >
                            {/* Title */}
                            <div className="w-full sm:w-2/5">
                                <h2 className="text-4xl sm:text-5xl font-bold">Reach</h2>
                            </div>

                            {/* Description */}
                            <div className="w-full sm:w-3/5">
                                <p className="text-lg sm:text-[22px] font-medium leading-[28px]">
                                    Our content is watched and loved by people all over the globe! Our content is available in 100+ languages spread across 160+ countries.
                                </p>
                            </div>
                        </div>

                        <div className="container mx-auto w-full bg-custom-gradient text-white  py-20 mt-15 ">

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




                </>


            )
        case 'engagement':
            return (
                <>






                    <div className="w-full sm:w-[70vw] mx-auto">


                        {/* Header Section */}
                        <div className="flex justify-between items-center w-full flex-wrap gap-8 px-[10vw]" >
                            {/* Title */}
                            <div className="w-full sm:w-2/5">
                                <h2 className="text-4xl sm:text-5xl font-bold">Engagement</h2>
                            </div>

                            {/* Description */}
                            <div className="w-full sm:w-3/5">
                                <p className="text-lg sm:text-[22px] font-medium leading-[28px]">
                                    Having built a content network for about a decade, we constantly stumble upon things that work and things that don’t. This has made us the preferred partner for brands around the world.
                                </p>
                            </div>
                        </div>

                        <div className="container mx-auto w-full bg-custom-gradient text-white  py-20 mt-15 ">

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
                                        <p className="text-[50px] sm:text-[80px] font-semibold">70B+</p>
                                        <p className="text-[20px] sm:text-[30px]">Views/year</p>
                                    </div>

                                    {/* Brands */}
                                    <div className="flex flex-col items-center text-center">
                                        <HiMiniUserGroup size={40} className="text-blue-300 mb-2" />
                                        <p className="text-[50px] sm:text-[80px] font-semibold">100M</p>
                                        <p className="text-[20px] sm:text-[30px]">Subscribers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </>


            )
        case 'impact':
            return (
                <>




                    <div className="w-full sm:w-[70vw] mx-auto">


                        {/* Header Section */}
                        <div className="flex justify-between items-center w-full flex-wrap gap-8 px-[10vw]" >
                            {/* Title */}
                            <div className="w-full sm:w-2/5">
                                <h2 className="text-4xl sm:text-5xl font-bold">Impact</h2>
                            </div>

                            {/* Description */}
                            <div className="w-full sm:w-3/5">
                                <p className="text-lg sm:text-[22px] font-medium leading-[28px]">
                                    Infinitum is a global content network built for impact beyond borders. Our content is in the form of series, movies, and shows across several platforms.
                                </p>
                            </div>
                        </div>

                        <div className="container mx-auto w-full bg-custom-gradient text-white  py-20 mt-15 ">

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
                                        <p className="text-[50px] sm:text-[80px] font-semibold">2000+</p>
                                        <p className="text-[20px] sm:text-[30px]">Total Content</p>
                                    </div>

                                    {/* Brands */}
                                    <div className="flex flex-col items-center text-center">
                                        <HiMiniUserGroup size={40} className="text-blue-300 mb-2" />
                                        <p className="text-[50px] sm:text-[80px] font-semibold">10+</p>
                                        <p className="text-[20px] sm:text-[30px]">Total Platforms</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </>

            )
        case 'create':
            return (
                <>
                    <div className="w-full sm:w-[70vw] mx-auto">


                        {/* Header Secti on */}
                        <div className=" flex justify-between items-center w-full flex-wrap gap-8 px-[10vw] " >
                            {/* Title */}
                            <div className="w-full sm:w-2/5">
                                <h2 className="text-4xl sm:text-5xl font-bold">Create</h2>
                            </div>

                            {/* Description */}
                            <div className="w-full sm:w-3/5">
                                <p className="text-lg sm:text-[22px] font-medium leading-[28px]">
                                    Infinitum has successfully completed 200+ projects and helped deliver exemplary results to around 300+ brands.
                                </p>
                            </div>
                        </div>

                        <div className="container mx-auto w-full bg-custom-gradient text-white  py-20 mt-15 ">

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
                                        <p className="text-[50px] sm:text-[80px] font-semibold">200+</p>
                                        <p className="text-[20px] sm:text-[30px]">Projects</p>
                                    </div>

                                    {/* Brands */}
                                    <div className="flex flex-col items-center text-center">
                                        <HiMiniUserGroup size={40} className="text-blue-300 mb-2" />
                                        <p className="text-[50px] sm:text-[80px] font-semibold">100+</p>
                                        <p className="text-[20px] sm:text-[30px]">Brands</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            )
        default:
            return <div className="p-4">Please select a page from the menu.</div>;
    }
};

const SwitchContect = () => {
    const [selectedContent, setSelectedContent] = useState('about');

    return (
        <div className="bg-gray-300  flex flex-col pb-20">
            {/* Navigation Bar */}

            <nav className="text-black p-4 text-2xl">
                <ul className="flex justify-end flex-wrap px-0 md:px-1 md:space-x-6 sm:space-x-2 space-x-1">
                    {["about", "reach", "engagement", "impact", "create"].map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => setSelectedContent(item)}
                                className={`md:mx-3 sm:mx-2 mx-1 md:text-xl text-sm sm:text-sm font-normal tracking-wide cursor-pointer relative hover:text-gray-500`}
                            >
                                {item.toUpperCase()}
                                {/* Add underline when selected */}
                                {selectedContent === item && (
                                    <span className="absolute bottom-[-5px] left-0 right-0 w-full border-b-2 border-blue-400"></span>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>




            {/* Content Section */}
            <div className="flex-1">
                <Content selectedContent={selectedContent} />
            </div>
        </div>
    );
};

export default SwitchContect;
