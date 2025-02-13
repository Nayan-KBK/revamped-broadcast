import React, { useEffect, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {


    const form = useRef();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        subject: '',
        message: '',
        recaptchaValue: null, // Initialize the reCAPTCHA value
    });

    const [showRecaptcha, setShowRecaptcha] = useState(false);

    useEffect(() => {
        // Load the reCAPTCHA script when the component mounts
        if (showRecaptcha) {
            const script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }, [showRecaptcha]);



    const [error, setError] = useState(null);

    // const handleFormSubmit = async (e) => {
    //     e.preventDefault();

    //     // Check if the reCAPTCHA value is provided
    //     if (!formData.recaptchaValue) {
    //         setError('Please complete the reCAPTCHA verification.');
    //         return;
    //     }

    //     // Reset the error state
    //     setError(null);

    //     console.log("formData===================>", formData)
    //     alert(`Form send successfully ${formData}`)


    // };






    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Check if the reCAPTCHA value is provided
        if (!formData.recaptchaValue) {
            setError('Please complete the reCAPTCHA verification.');
            return;
        }

        try {
            // Reset error state
            setError(null);

            // Send form data to the backend API
            const response = await fetch("https://kbk-broadcasting-backend.vercel.app/submit-contact-form", {
            // const response = await fetch("http://localhost:5000/submit-contact-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong!");
            }

            // Success alert
            alert("Form sent successfully!");

            // Reset form after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                mobile: '',
                email: '',
                subject: '',
                message: '',
                recaptchaValue: null,
            });

        } catch (error) {
            setError(error.message);
            console.error("Error submitting form:", error);
        }
    };








    const handleRecaptchaChange = (value) => {
        // Update the form state with the reCAPTCHA value
        setFormData({
            ...formData,
            recaptchaValue: value,
        });

        // Clear the error when the user completes the reCAPTCHA
        setError(null);
    };

    const handleInputChange = (e) => {
        // Update the form data as the user types
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if (!showRecaptcha) {
            setShowRecaptcha(true);
        }

    };





    return (
        <>
            <div className="w-full">
                <div className="container mx-auto ">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="md:w-1/2 w-full  h-[400px] md:h-[500px] sm:px-0  px-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d817.9275040554313!2d78.5592432510582!3d17.3940053648516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919502df770f%3A0xf6f47e51347556b4!2sKBK%20Business%20Solutions%20%7C%20Web%20Development%20Agency%20%7C%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1739169748419!5m2!1sen!2sin" width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-lg"
                            ></iframe>
                        </div>

                        <div className="w-full md:w-1/2  sm:bg-white  p-8 py-16">

                            <form className='space-y-4' autoComplete='off' ref={form} onSubmit={handleFormSubmit}>
                                <p class="sm:text-2xl text-xl sm:ml-0 ml-2 font-black text-black text-left">We'd Love to Hear From You</p>
                                <div className="flex gap-4">

                                    <div className="w-full sm:w-1/2 mb-4 ">
                                        <input
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name *"
                                            onKeyUp={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); }}

                                            className="w-full p-3 border-b border-gray-400 rounded-none focus:outline-none"
                                            required
                                        />
                                    </div>

                                    <div className="w-full sm:w-1/2 mb-4">
                                        <input
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name *"
                                            onKeyUp={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); }}

                                            className="w-full p-3 border-b border-gray-400 rounded-none focus:outline-none"
                                            required
                                        />
                                    </div>
                                </div>


                                <div className="flex gap-4">

                                    <div className="w-full sm:w-1/2 mb-4">
                                        <input
                                            value={formData.mobile}
                                            onChange={handleInputChange}
                                            type="text"
                                            maxLength={13}
                                            minLength={10}
                                            name="mobile"
                                            placeholder="Mobile / Phone No *"


                                            className="w-full p-3 border-b border-gray-400 rounded-none focus:outline-none"
                                            onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, ''); }}
                                            required
                                        />
                                    </div>

                                    <div className="w-full sm:w-1/2 mb-4">
                                        <input
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            type="email"
                                            name="email"
                                            placeholder="Email Address*"

                                            className="w-full p-3 border-b border-gray-400 rounded-none focus:outline-none"
                                            onInput={(e) => { e.target.value = e.target.value.replace(/[^A-Za-z@.,0-9]/g, ''); }}

                                            required
                                        />
                                    </div>
                                </div>

                                <div className="w-full mb-4">
                                    <input
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        type="text"
                                        name="subject"
                                        placeholder="Subject*"

                                        className="w-full p-3 border-b border-gray-400 rounded-none focus:outline-none"
                                        onKeyUp={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s,.]/g, ''); }}
                                        required
                                    />
                                </div>

                                <div className="w-full mb-4">
                                    <textarea
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border-b sm:border-gray-400 border-gray-500 rounded-none focus:outline-none"
                                        rows={3}
                                        name="message"
                                        placeholder="What's on your mind?*"
                                        onKeyUp={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s.,]/g, ''); }}
                                        required
                                    />
                                </div>

                                {/* Add the reCAPTCHA component */}
                                {/* Main--  6LeeczkpAAAAAHhwk2zz9moWNOLDU_Ji61Lh1sd4   localhost--  6Lcl0ygoAAAAAHKrsouKfVZMhLnkt6qZe2ecLy9x */}

                                {showRecaptcha && (
                                    <>
                                        <ReCAPTCHA
                                            sitekey="6Lcl0ygoAAAAAHKrsouKfVZMhLnkt6qZe2ecLy9x"
                                            onChange={handleRecaptchaChange}
                                            theme="light"
                                        />
                                        {/* Display the error message if reCAPTCHA is not completed */}
                                        {error && <p className="text-red-500">{error}</p>}
                                    </>
                                )}

                                <div className="w-full mt-3">
                                    <button type="submit" value="Send" className="w-full sm:w-auto bg-green-500 text-white py-3 px-8 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mx-auto block text-center cursor-pointer ">
                                        Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
