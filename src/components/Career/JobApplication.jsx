import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

const JobApplication = () => {
    const { id } = useParams();
    const [position, setPosition] = useState(null);
    const [formData, setFormData] = useState({
        jobID: "",
        jobTitle: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        qualification: '',
        address: '',
        cvUpload: null,
        videoLink: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sendingForm, setSendingForm] = useState(false);




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


    const handleRecaptchaChange = (value) => {
        // Update the form state with the reCAPTCHA value
        setFormData({
            ...formData,
            recaptchaValue: value,
        });

        // Clear the error when the user completes the reCAPTCHA
        setError(null);
    };


    useEffect(() => {
        const fetchPosition = async () => {
            try {
                const response = await axios.get('https://kbk-broadcasting-backend.vercel.app/get-jobs');
                // const response = await axios.get('https://kbk-broadcasting-backend.vercel.app/get-jobs');
                const positions = response.data;
                const selectedPosition = positions.find((pos) => pos._id == id);
                setPosition(selectedPosition);
                setLoading(false);
            } catch (err) {
                setError('Error fetching job positions');
                setLoading(false);
            }
        };
        fetchPosition();
    }, [id]);

    useEffect(() => {
        if (position) {
            setFormData(prevState => ({
                ...prevState,
                jobID: position._id,
                jobTitle: position.title
            }));
        }
    }, [position]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });


        if (!showRecaptcha) {
            setShowRecaptcha(true);
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSendingForm(true)

        if (!formData.firstName || !formData.lastName || !formData.email) {
            alert('Please fill all the required fields.');
            setSendingForm(false)

            return;
        }
        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            alert('Please enter a valid email address.');
            setSendingForm(false)

            return;
        }
        if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
            alert('Please enter a valid 10-digit mobile number.');
            setSendingForm(false)

            return;
        }
        const formDataObj = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataObj.append(key, value);
        });
        try {
            const response = await fetch('https://kbk-broadcasting-backend.vercel.app/submit-form', {
                method: 'POST',
                body: formDataObj,
            });
            console.log('formDataObj----->', formDataObj)
            const data = await response.json();
            if (response.ok) {
                setSendingForm(false)
                setFormData({ jobID: "", jobTitle: "", firstName: "", lastName: "", email: "", mobile: "", qualification: "", address: "", videoLink: '', cvUpload: null });
                alert(data.message);
            } else {
                setSendingForm(false)
                alert(data.message);
            }
        } catch (error) {
            setSendingForm(false)

            alert(error);
        }
    };

    if (loading) return <p>Loading job position...</p>;
    if (error) return <p>{error}</p>;
    if (!position) return <p>Position not found</p>;


    console.log('position----->', position)

    return (
        <>


            <div className="h-20 bg-gray-400  mb-10"></div>

            <div className="px-[5vw] sm:px-[15vw] mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-lg shadow-lg border-small p-6 h-fit my-2" >
                        <h3 className="text-3xl text-center mb-4 text-logo-blue">
                            Job Description
                        </h3>

                        <table className="w-full ">
                            <tbody className='text-left'>
                                <tr className="odd:bg-white even:bg-gray-200">
                                    <th className="border-small  p-2">Title</th>
                                    <td className="border-small  p-2">{position.title}</td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-200">
                                    <th className="border-small  p-2">Posting Date</th>
                                    <td className="border-small  p-2">{position.postingDate}</td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-200">
                                    <th className="border-small  p-2">Location</th>
                                    <td className="border-small  p-2">{position.location}</td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-200">
                                    <th className="border-small  p-2">Job Type</th>
                                    <td className="border-small  p-2">{position.jobType}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="mt-5">
                            <p className="text-gray-800 my-3">
                                <strong>Qualifications:</strong> {position.qualification}
                            </p>
                            <p className="text-gray-800 my-3">
                                <strong>Experience:</strong> {position.experience}
                            </p>

                            <p className="font-semibold my-3">Skills Required:</p>
                            <ul className="list-disc list-inside text-gray-800 my-3 ml-5">
                                {position?.skills?.length > 0 ? (
                                    position.skills.map((skill, index) => <li key={index}>{skill}</li>)
                                ) : (
                                    <p className="text-gray-500 my-3">No Skills Required</p>
                                )}
                            </ul>

                            <div className="text-gray-800 my-3">
                                <div dangerouslySetInnerHTML={{ __html: position.description }} />
                            </div>
                        </div>
                    </div>








                    <div className="rounded-lg shadow-lg border-small my-4 p-6">
                        <h3 className="text-3xl  text-center mb-4 text-logo-blue">
                            Apply for {position.title}
                        </h3>








                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            {/* First and Last Name */}
                            <div className="mb-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block font-medium">
                                        First Name: <span className='text-red-800'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full p-2 border-small my-2 rounded-md"
                                        value={formData.firstName}
                                        onChange={(e) => {
                                            const updatedValue = e.target.value.replace(/[^a-zA-Z\s,\.]/g, '');
                                            handleChange({ target: { name: 'firstName', value: updatedValue } });
                                        }}
                                        placeholder="First Name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block font-medium">
                                        Last Name:<span className='text-red-800'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="w-full p-2 border-small my-2 rounded-md"
                                        value={formData.lastName}
                                        onChange={(e) => {
                                            const updatedValue = e.target.value.replace(/[^a-zA-Z\s,\.]/g, '');
                                            handleChange({ target: { name: 'lastName', value: updatedValue } });
                                        }}
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email and Mobile */}
                            <div className="mb-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block font-medium">Email: <span className='text-red-800'>*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full p-2 border-small my-2 rounded-md"
                                        value={formData.email}
                                        onChange={(e) => {
                                            const updatedValue = e.target.value.replace(/[^a-zA-Z0-9@._+-]/g, '');
                                            handleChange({ target: { name: 'email', value: updatedValue } });
                                        }}
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="mobile" className="block font-medium">Mobile: <span className='text-red-800'>*</span></label>
                                    <input
                                        type="text"
                                        id="mobile"
                                        name="mobile"
                                        className="w-full p-2 border-small my-2 rounded-md"
                                        value={formData.mobile}
                                        onChange={(e) => {
                                            const updatedValue = e.target.value.replace(/[^0-9]/g, '');
                                            handleChange({ target: { name: 'mobile', value: updatedValue } });
                                        }}
                                        placeholder="Your Mobile Number"
                                        minLength="10"
                                        maxLength="13"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Job Title */}
                            <div className="mb-3">
                                <label htmlFor="positionTitle" className="block font-medium">Job Title: <span className='text-red-800'>*</span></label>
                                <input
                                    type="text"
                                    id="positionTitle"
                                    name="positionTitle"
                                    className="w-full p-2 border-small my-2 rounded-md bg-gray-100"
                                    value={position.title}
                                    readOnly
                                    placeholder="Job Title"
                                />
                            </div>

                            {/* Qualification */}
                            <div className="mb-3">
                                <label htmlFor="qualification" className="block font-medium">Qualification: <span className='text-red-800'>*</span></label>
                                <input
                                    type="text"
                                    id="qualification"
                                    name="qualification"
                                    className="w-full p-2 border-small my-2 rounded-md"
                                    value={formData.qualification}
                                    onChange={(e) => {
                                        const updatedValue = e.target.value.replace(/[^a-zA-Z0-9\s,\.]/g, '');
                                        handleChange({ target: { name: 'qualification', value: updatedValue } });
                                    }}
                                    placeholder="Your Qualification"
                                    required
                                />
                            </div>

                            {/* Address */}
                            <div className="mb-3">
                                <label htmlFor="address" className="block font-medium">Address: <span className='text-red-800'>*</span></label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="w-full p-2 border-small my-2 rounded-md"
                                    value={formData.address}
                                    onChange={(e) => {
                                        const updatedValue = e.target.value.replace(/[^a-zA-Z0-9\s,\.]/g, '');
                                        handleChange({ target: { name: 'address', value: updatedValue } });
                                    }}
                                    placeholder="Address"
                                    required
                                />
                            </div>

                            {/* Upload CV */}
                            <div className="mb-3">
                                <label htmlFor="cvUpload" className="block font-medium">Upload CV: <span className='text-red-800'>*</span></label>
                                <input
                                    type="file"
                                    id="cvUpload"
                                    name="cvUpload"
                                    accept="application/pdf"
                                    required
                                    className="w-full p-2 border-small my-2 rounded-md"
                                    onChange={(e) => setFormData({ ...formData, cvUpload: e.target.files[0] })}
                                />
                            </div>

                            {/* Attach Video */}
                            <div className="mb-4">
                                <label htmlFor="videoLink" className="block font-medium">Attach Video: <span className='text-red-800'>*</span></label>
                                <p className="text-gray-500 text-sm">
                                    <span className="text-red-500 font-semibold">Instruction:</span> Upload the video to
                                    <a href="https://drive.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mx-1">
                                        Google Drive
                                    </a>
                                    and either share it with <strong>info@kbkbroadcasting.in</strong> or set its access to "Anyone with the link." Copy and paste the link below.
                                </p>
                                <input
                                    type="text"
                                    id="video"
                                    name="video"
                                    className="w-full p-2 border-small my-2 rounded-md"
                                    value={formData.videoLink}
                                    onChange={(e) => {
                                        const updatedValue = e.target.value.replace(/[^a-zA-Z0-9:/?&=._\-]/g, '');
                                        handleChange({ target: { name: 'videoLink', value: updatedValue } });
                                    }}
                                    placeholder="Google Drive Link"
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

                            {/* Submit Button */}
                            <button type="submit" className="mt-5 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition hover:cursor-pointer  disabled:bg-gray-400 disabled:cursor-not-allowed"
                            disabled={sendingForm}>
                                Submit Application
                            </button>
                        </form>












                    </div>
                </div>
            </div>

        </>
    );
};

export default JobApplication;
