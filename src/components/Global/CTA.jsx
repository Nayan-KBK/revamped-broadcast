import React from 'react'
import { FaRegAddressBook } from 'react-icons/fa'


function CTA() {
    return (
        <>
            <div className="cta relative  h-[350px] lg:h-[280px] md:h-[280px] sm:h-[300px]  w-full flex items-start justify-center text-white px-[5vw] sm:px-[15vw]">
                <div className="cta-overlay"></div>


                <div className="relative flex flex-col items-center  ">
                    <flex className="flex flex-col items-center py-5 px-2">
                        <p className='text-white font-bold text-2xl lg:text-4xl sm:text-3xl  my-5 text-center'>Stay Connected, Stay Informed!</p>
                        <p className='text-white font-medium text-xl lg:text-3xl sm:text-2xl text-center'>Join our live broadcasts and never miss an update. Tune in now and be part of the conversation!</p>

                    </flex>



                    <a href="/conact"
                        className="px-8 py-2 font-bold bg-blue-900 text-yellow-300 text-2xl rounded-full shadow-lg hover:bg-blue-800 transition flex items-center space-x-2 my-5"
                    >
                        <FaRegAddressBook />
                        <span>Get in Touch</span>
                    </a>

                </div>

            </div>




        </>
    )
}

export default CTA