import React from 'react'

import kapotham from '../../assets/kapotham.png'
import knews from '../../assets/knews.webp'
import MRHyderabadi from '../../assets/MRHyderabadi.webp'
import bhavyasMedia from '../../assets/bhavyasMedia.webp'
import aboutBanner from '../../assets/about-banner.png'
import { NavLink } from 'react-router-dom'

function About() {
    return (
        <>
            <div className="bg-black h-20"></div>


            {/* <section className="bg-gradient-to-r from-[#000] to-[#2d3a8e] h-[70vh] px-[5vw] sm:px-[12vw] flex ">
                <div className="container mx-auto w-full ">
                    <div className="grid md:grid-cols-2 h-full">
                        <div className="flex items-end h-full">
                            <img
                                src={aboutBanner}
                                alt="Banner"
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-end space-y-5 pb-5">
                            <h1 className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-7xlfont-bold">Who We Are</h1>
                            <h6 className="text-white text-2xl">We are a passionate, dynamic, and innovative team committed to excellence.</h6>
                            <h5 className="text-white text-xl">Our goal is to create a welcoming and professional environment where talent thrives.</h5>
                        </div>

                    </div>
                </div>
            </section> */}



            <section className="bg-gradient-to-r from-[#000] to-[#2d3a8e] min-h-[54vh] flex items-center px-5 sm:px-12">
                <div className="container mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        {/* Image Section */}
                        <div className="flex justify-center md:justify-end">
                            <img
                                src={aboutBanner}
                                alt="Banner"
                                className="w-full max-w-[500px] md:max-w-[600px] h-auto object-cover "
                            />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col justify-center space-y-4 text-center md:text-left md:pb-0 pb-10">
                            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                                Who We Are
                            </h1>
                            <h6 className="text-white text-base sm:text-lg md:text-xl text-left">
                                We are a passionate, dynamic, and innovative team committed to excellence.
                            </h6>
                            <h5 className="text-white text-sm sm:text-base md:text-lg text-left">
                                Our goal is to create a welcoming and professional environment where talent thrives.
                            </h5>
                        </div>
                    </div>
                </div>
            </section>







            <section className="container mx-auto px-[5vw] sm:px-[15vw] py-16 text-left">
                {/* <h2 className="text-4xl font-bold text-gray-900">About</h2> */}
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Your Daily Dose of News and Entertainment
                </h3>
                <p className="mt-8 text-lg text-gray-600  ">
                    In today’s modern technological age, the role of media is undeniably pivotal.
                    Media serves as a potent instrument for delivering content to the masses,
                    making it a powerful channel for information dissemination.
                </p>
                <p className="mt-4 text-lg text-gray-600 ">
                    Audiences exhibit a keen interest in a spectrum of programs,
                    ranging from entertainment to daily news and feature stories.
                </p>

                <div className="mt-6">
                    <p className="text-gray-800 font-semibold">For More info</p>
                    <NavLink
                        to="/contact-us"
                        className="mt-2 inline-flex items-center px-6 py-3 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all"
                    >
                        Let's have words
                        <span className="ml-2">➡️</span>
                    </NavLink>
                </div>


            </section>






            <section className="container mx-auto px-[5vw] sm:px-[15vw] py-16 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 text-left">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Distribution Solutions
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We have different types of broadcasting channels like blogging,
                        news-channel, and YouTube channels.
                    </p>
                </div>

                <div className="lg:w-1/2 grid grid-cols-2 gap-8 relative mt-10 lg:mt-0">
                    <div className="absolute top-1/2 left-0 w-full border-t border-gray-300"></div>
                    <div className="absolute left-1/2 top-0 h-full border-l border-gray-300"></div>

                    <div className="flex justify-center">
                        <img src={kapotham} alt="Logo 1" className="h-16" />
                    </div>
                    <div className="flex justify-center">
                        <img src={knews} alt="Logo 2" className="h-16" />
                    </div>
                    <div className="flex justify-center">
                        <img src={MRHyderabadi} alt="Logo 3" className="h-16" />
                    </div>
                    <div className="flex justify-center">
                        <img src={bhavyasMedia} alt="Logo 4" className="h-16" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About