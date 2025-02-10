import React, { useState } from 'react'
import logo from "../../assets/footerLogo.png"
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { ImWhatsapp } from 'react-icons/im';
import { PiChatCircleDotsBold, PiChatCircleDotsLight } from 'react-icons/pi';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);



    return (
        <>

            <nav className="absolute top-0 left-0 w-full bg-transparent z-10 ">
                <div className="container mx-auto flex justify-around items-center px-6 py-4">
                    {/* Logo */}

                    <a href='/'>
                        <img src={logo} alt="KBK-Broadcasting" height={40} width={150} />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden pl-20 text-white text-3xl focus:outline-none z-999999"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>





                    {/* Desktop Menu */}




                    <ul className="hidden md:flex space-x-6 text-white text-xl">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `cursor-pointer transition ${isActive ? "text-red-400" : "hover:text-blue-400"}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `cursor-pointer transition ${isActive ? "text-red-400" : "hover:text-blue-400"}`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `cursor-pointer transition ${isActive ? "text-red-400" : "hover:text-blue-400"}`
                                }
                            >
                                Services
                            </NavLink>
                        </li>




                        <li className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="cursor-pointer transition hover:text-blue-400 flex items-center gap-1"
                            >
                                Channel Partner
                                <svg
                                    className={`w-4 h-4 transform ${isDropdownOpen ? "rotate-180" : ""} transition-transform`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <ul className="text-base absolute left-0 mt-2 w-60 bg-white text-black shadow-lg rounded-md border py-2 z-10">
                                    {[
                                        { name: "K-News Telugu", link: "https://www.youtube.com/@KNewsTelugu1" },
                                        { name: "Kapotham Telugu News", link: "https://kapotham.com/" },
                                        { name: "Mr. Hyderbadi", link: "https://www.youtube.com/@mr.hyderabadi4718" },
                                        { name: "Bhavy's Media", link: "https://www.youtube.com/@bhavyasmedia" },
                                    ].map((item, index) => (
                                        <li key={index}>
                                            <NavLink
                                                to={item.link}
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 transition ${isActive ? "text-red-400 font-semibold" : "hover:bg-blue-100"}`
                                                }
                                                onClick={() => setIsDropdownOpen(false)}
                                                target='_blank'
                                            >
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>


                        <li>
                            <NavLink
                                to="/career"
                                className={({ isActive }) =>
                                    `cursor-pointer transition ${isActive ? "text-red-400" : "hover:text-blue-400"}`
                                }
                            >
                                Career
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact-us"
                                className={({ isActive }) =>
                                    `cursor-pointer transition ${isActive ? "text-red-400" : "hover:text-blue-400"}`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>


                        <li className="nav-item">
                            <button className="bg-yellow-400 text-black px-4 transition hover:bg-yellow-500 flex items-center">
                                <a
                                    href="https://api.whatsapp.com/send?phone=919010458007&text=Hi%20I%20have%20query%20about%20%20"
                                    className="flex items-center space-x-2"
                                >
                                    <PiChatCircleDotsBold />
                                    <span>Talk to us  </span>
                                </a>
                            </button>

                        </li>
                    </ul>


                </div>

                {/* Mobile Menu */}






                <>
                    {/* Hamburger Button */}


                    {/* Mobile Menu */}
                    <div
                        className={`fixed top-0 right-0 w-[70vw] h-screen bg-black md:hidden transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full hidden"
                            }`}
                    >
                        <ul className="flex flex-col items-left pl-10 space-y-4 py-8 text-white text-xl mt-15 h-[60vh] justify-between">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `cursor-pointer transition ${isActive ? "text-red-700" : "hover:text-blue-400"
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `cursor-pointer transition ${isActive ? "text-red-400" : "hover:text-blue-400"
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `cursor-pointer transition ${isActive ? "text-red-400" : "hover:text-blue-400"
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    Services
                                </NavLink>
                            </li>



                            <li className="relative">
                                {/* Dropdown Toggle Button */}
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="cursor-pointer transition hover:text-blue-400 flex items-center gap-1"
                                >
                                    Channel Partner
                                    <svg
                                        className={`w-4 h-4 transform ${isDropdownOpen ? "rotate-180" : ""} transition-transform`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <ul className="absolute left-0 mt-2 w-54 bg-white text-black shadow-lg rounded-md border py-2 z-10">
                                        {[
                                            { name: "K-News Telugu", link: "https://www.youtube.com/@KNewsTelugu1" },
                                            { name: "Kapotham Telugu News", link: "https://kapotham.com/" },
                                            { name: "Mr. Hyderbadi", link: "https://www.youtube.com/@mr.hyderabadi4718" },
                                            { name: "Bhavy's Media", link: "https://www.youtube.com/@bhavyasmedia" },
                                        ].map((item, index) => (
                                            <li key={index}>
                                                <NavLink
                                                    to={item.link}
                                                    className={({ isActive }) =>
                                                        `block px-4 py-2 transition text-xl ${isActive ? "text-red-400 " : "hover:bg-blue-100"}`
                                                    }
                                                    onClick={() => setIsDropdownOpen(false)}
                                                >
                                                    {item.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>



                            <li>
                                <NavLink
                                    to="/career"
                                    className={({ isActive }) =>
                                        `cursor-pointer transition ${isActive ? "text-red-400" : "hover:text-blue-400"
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    Career
                                </NavLink>
                            </li>


                            <li>
                                <NavLink
                                    to="/contact-us"
                                    className={({ isActive }) =>
                                        `cursor-pointer transition ${isActive ? "text-red-400" : "hover:text-blue-400"}`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact Us
                                </NavLink>
                            </li>




                            <li className="nav-item">
                                <button className="bg-yellow-400 text-black px-4 transition hover:bg-yellow-500 flex items-center">
                                    <a
                                        href="https://api.whatsapp.com/send?phone=919010458007&text=Hi%20I%20have%20query%20about%20%20"
                                        className="flex items-center space-x-2"
                                    >
                                        <PiChatCircleDotsBold />
                                        <span>Talk to us  </span>
                                    </a>
                                </button>

                            </li>
                        </ul>
                    </div>
                </>





            </nav>
        </>
    )
}

export default Navbar