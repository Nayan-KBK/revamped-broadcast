import React from 'react'
import logo from '../../assets/footerLogo.png'
import { Link, NavLink } from 'react-router-dom'
import { PiChatCircleDotsBold, PiChatCircleDotsLight, PiLinkSimple } from 'react-icons/pi';
import { MdFacebook } from 'react-icons/md';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { IoCall } from 'react-icons/io5';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className='bg-black px-[5vw] sm:px-[15vw]  py-13'>
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-4 gap-6">


            <div className="flex flex-col justify-around sm:h-full h-60 ">
              <a href='/'>
                <img src={logo} alt="logoImage" className="w-50 h-auto" />
              </a>
              <h6 className='text-lg font-semibold text-white ml-2'>Stay Connected</h6>

              <div className="flex text-white ">
                <h6><a className=' hover:text-primary flex' href='tel:+917032666108'><IoCall className='h-6 w-5 mx-2' />+91 70326 66108</a></h6>
              </div>
              <div className="flex  text-white ">
                <h6><a className=' hover:text-primary flex' href='mailto:info@kbkbroadcasting.in'><GrMail className='h-6 w-5 mx-2' />info@kbkbroadcasting.in</a></h6>
              </div>
              <div className="flex   space-x-4 text-2xl text-white ml-1">
                <a href="https://www.facebook.com/people/K-News-Telugu/61553101192343/"><MdFacebook /></a>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2FKNewsTelugu1"><RiTwitterXFill /></a>
                <a href="https://www.youtube.com/channel/UCdUYbD8nBJvaVW2XSw3gY8A"><FaYoutube /></a>
                <a href="https://www.instagram.com/knewstelugu.info/"><FaInstagram /></a>

              </div>

              <button className="bg-yellow-400 text-black px-4 transition w-fit hover:bg-yellow-500 flex items-center mt-2">
                <a
                  href="https://api.whatsapp.com/send?phone=919010458007&text=Hi%20I%20have%20query%20about%20%20"
                  className="flex items-center space-x-2"
                >
                  <PiChatCircleDotsBold />
                  <span>Talk to us  </span>
                </a>
              </button>
            </div>











            <div className=" mt-3">
              <h6 className="text-lg font-semibold text-white mb-5">Quick Links</h6>
              <ul className='space-y-3 text-white'>


                <li><Link to="/" className="flex items-center  hover:text-primary">  <PiLinkSimple className='mx-2' />Home</Link></li>
                <li><Link to="about" className="flex items-center  hover:text-primary">  <PiLinkSimple className='mx-2' />About</Link></li>
                <li><Link to="/contact-us" className="flex items-center  hover:text-primary"> <PiLinkSimple className='mx-2' />Contact</Link></li>
                <li><Link to="/services" className="flex items-center  hover:text-primary"> <PiLinkSimple className='mx-2' />Services</Link></li>
                <li><Link to="/career" className="flex items-center  hover:text-primary"> <PiLinkSimple className='mx-2' />Career</Link></li>
                <li><Link to="/contact-us" className="flex items-center  hover:text-primary"> <PiLinkSimple className='mx-2' />Contact</Link></li>
              </ul>
            </div>



            <div className="mt-3">
              <h6 className="text-lg font-semibold  text-white mb-5">Our Services</h6>
              <ul className='space-y-3 text-white'>
                <li><Link to="/services" className="flex items-center  hover:text-primary">Video Service</Link></li>
                <li><Link to="/services" className="flex items-center  hover:text-primary">Brand Promotion</Link></li>
                <li><Link to="/services" className="flex items-center  hover:text-primary">PodCasts</Link></li>
                <li><Link to="/services" className="flex items-center  hover:text-primary">Content Creation</Link></li>
                <li><Link to="/services" className="flex items-center  hover:text-primary">Green Matte Studio</Link></li>
                <li><Link to="/services" className="flex items-center  hover:text-primary">Video Editing</Link></li>

              </ul>
            </div>



            <div className="chaneel-partner mt-3">
              <h6 className="text-lg font-semibold  text-white mb-5">Channel Partner</h6>

              <ul className="space-y-3 text-white">
                {[
                  { name: "K-News Telugu", link: "https://www.youtube.com/@KNewsTelugu1" },
                  { name: "Kapotham Telugu News", link: "https://kapotham.com/" },
                  { name: "Mr. Hyderabadi", link: "https://www.youtube.com/@mr.hyderabadi4718" },
                  { name: "Bhavyas Media", link: "https://www.youtube.com/@bhavyasmedia" },

                ].map((item, index) => (
                  <li key={index}  >
                    <Link
                      className="flex items-center  hover:text-primary"
                      to={item.link}
                      target='_blank'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>








          </div>
        </div>
      </footer>







      <hr className='text-white' />
      <section className='bg-black py-4 px-10'>
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-around  items-center">
            <div className="text-gray-200 text-center">
              <p> Copyright &copy; {currentYear} KBK Broadcasting Services.</p>
            </div>
            <div className="text-gray-200 text-center mt-10 sm:mt-0">
              <a href='https://kbkbusinesssolutions.com' className='text-light'>
                Designed and Developed by <span className='text-red-500'>KBK Business Solutions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
