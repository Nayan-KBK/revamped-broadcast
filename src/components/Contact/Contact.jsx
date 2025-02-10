import React from 'react'


import contactBg from '../../assets/contactBg.jpg'
import { MdLocationOn, MdOutlineMail } from 'react-icons/md'
import { IoCall, IoCallOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'
import ContactForm from './GetInTouch'
import { GrMail } from 'react-icons/gr'
const Contact = () => {
    return (
        <>

            <div className="h-20 bg-black"></div>


            <section
                className="relative md:h-[80vh] h-[50vh] flex items-center px-5  sm:px-[15vw] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${contactBg})` }}
            >
                {/* Overlay for better text readability */}

                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto w-full relative">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-2xl">
                        <h1 className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                            Let's Talk!
                        </h1>
                        <h6 className="text-white text-base sm:text-lg md:text-xl">
                            We'd love to hear from you. Whether it's a question, feedback, or just a hello reach out anytime.
                        </h6>
                        <h5 className="text-white text-sm sm:text-base md:text-lg">
                            Our team is always ready to assist you.
                        </h5>

                    </div>
                </div>
            </section>






            <div className="flex flex-wrap items-center justify-center py-6 px-5  sm:px-[15vw]">
                {/* USA Office */}
                <div className="w-full md:w-1/3 p-3">
                    <div className="bg-white shadow-lg rounded-lg p-6 py-9">
                        <h4 className="text-xl font-semibold">Email</h4>
                        <p className="flex items-center gap-2  mt-2">
                            <GrMail />
                            info@kbkbroadcasting.in
                        </p>
                    </div>
                </div>


                <div className="w-full md:w-1/3 p-3 ">
                    <div className="bg-white shadow-lg rounded-lg p-6 py-9">
                        <h4 className="text-xl font-semibold">Mobile</h4>
                        <p className="flex items-center gap-2  mt-2">
                            <IoCall />
                            +91 90104 58007
                        </p>
                    </div>
                </div>



                <div className="w-full md:w-1/3 p-3">
                    <div className="bg-white shadow-lg rounded-lg py-3 px-6">
                        <h4 className="text-xl font-semibold ">Address</h4>
                        <p className="flex items-start gap-3  mt-3 text-sm sm:text-base">
                            <MdLocationOn className=" w-10 sm:text-2xl text-3xl" />
                            H-No:2-1-8/4/1, NR.Suite 2A, Saraswathi Colony, Uppal, Hyderabad, Telangana 500039
                        </p>
                    </div>
                </div>
         


            </div>


            <div className="px-0 sm:px-[15vw]">

            <ContactForm/>
            </div>




        </>
    )
}

export default Contact